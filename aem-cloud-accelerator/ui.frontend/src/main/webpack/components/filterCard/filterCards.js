$(document).ready(function() {

    var selector = document.querySelector(".filter-config");
    var rootPagePath = selector.getAttribute("data-element-rootPagePath");
    var tagList = selector.getAttribute("data-element-tagList");
    var imagePathReference = selector.getAttribute("data-element-imagePathReference");
    window.pagination = selector.getAttribute("data-element-pagination");
    window.noOfItems = selector.getAttribute("data-element-noOfItems");

    function successFn(response) {        
        onLoad(response);
    }

    function errorFn(response) {
        console.log('error');
    }

    $.get(
        "/bin/servlet/filterCardsServlet",
        {
            rootPagePath: rootPagePath,
            tagList: tagList,
            imagePathReference: imagePathReference,
        },
        function(data,status) {
            successFn(data);
        }
    );

    function onLoad(response) {

        var parseObject = JSON.parse(response)        
        var jsonObj = parseObject;
        var uniqueTags = jsonObj.tags;
        var uniqueTagsCount = [];
        var tagsWithHierarchy = [];
        var splittedTags = [];
        var parentTag = [];
        var childTag = [];


        for (var keys in uniqueTags) {
            tagsWithHierarchy.push(`${keys}`);
            splittedTags.push(`${keys}`.split("/"));
            uniqueTagsCount.push(`${uniqueTags[keys]}`);
        }

        window.parentChildMap = new Map();
        window.jsonGlobal = jsonObj;
        window.parentTagArrayGlobal = [];
        window.facetTagArrayGlobal = [];
        window.summaryListGlobal = [];
        window.parentTagFirstCallCounter = 0;
        window.onLoadFlag = 0
        window.totalCountOfTilesGlobal;
        window.displayCountGlobal;



        for (let i = 0; i < splittedTags.length; i++) {
            parentTag.push(splittedTags[i][0]);
            childTag.push(splittedTags[i][1]);
            sidebarParentTags(parentTag[i]);
            sidebarChildTags(parentTag[i], childTag[i], uniqueTagsCount[i]);

            if (window.parentChildMap.has(splittedTags[i][0])) {
                var initialVal = window.parentChildMap.get(splittedTags[i][0]);
                var newVal = [];
                newVal.push(initialVal);
                newVal.push(splittedTags[i][0] + "-" + splittedTags[i][1])
                window.parentChildMap.set(splittedTags[i][0], newVal)
            } else {
                window.parentChildMap.set(splittedTags[i][0], splittedTags[i][0] + "-" + splittedTags[i][1])
            }
        }


        $(".bottom-remove-filter").css("display", "none");
        var jsonObj = window.jsonGlobal;
        var collection = _.filter(jsonObj.pages, function(myObject) {
            return myObject.tags;
        });

        window.totalCountOfTilesGlobal = collection.length;

        if (window.totalCountOfTilesGlobal <= 6 && window.totalCountOfTilesGlobal >3) {
            window.displayCountGlobal = 3;
        } else if (window.totalCountOfTilesGlobal > 6) {
            window.displayCountGlobal = 6;
        } else if (window.totalCountOfTilesGlobal <= 3 && window.totalCountOfTilesGlobal >= 0) {
            window.displayCountGlobal = window.totalCountOfTilesGlobal;
            $(".loadMore").hide();
        }


        for (var i = 0; i < window.displayCountGlobal; ++i) {
            var item = collection[i];
            var origin = location.origin;
            $(".projectOne").append('<div class="search-result-item ' + item.tags + '" id="' + item.pageTitle + '" name="' + item.pageTitle + '" ><div><div class="search-result-item"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><div><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"><div><img class="tilesImage" alt="' + item.imageAltText + '" src="' + item.imagePath + '"></div></a><h3 class="field-title" style="text-decoration:none;"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><a title="' + item.pageTitle + '" href="' + item.pageUrl + '">' + item.pageTitle + '</a></h3></div></div></div>');
        }
    }

    function sidebarChildTags(parentTag, childTag, childTagCount) {
        var parentElement = $('.' + parentTag + '');
        parentElement.parent().append('<li><button class="submenu-btn ' + parentTag + '-' + childTag + '" name="' + parentTag + '-' + childTag + '"  tags="' + parentTag + '/' + childTag + '">' + capitalizeFirstLetter(childTag) + ' [' + childTagCount + ']</button></li>')
    }

    function sidebarParentTags(parentTag) {
        if (!window.parentTagArrayGlobal.includes(parentTag)) {
            window.parentTagArrayGlobal.push(parentTag);
            $(".projects").append('<li class="listParentTag"><button class="sidebar-btn ' + parentTag + '" isParent="Yes" name="' + parentTag + '" tags="' + parentTag + '"><span class="category-button" >' + capitalizeFirstLetter(parentTag) + '</span><img src="/apps/ixm-aem/clientlibs/clientlib-site/resources/images/Down Arrow.svg" alt="v" class="sidebar-caret" /></button><ul class="sidebar-submenu list-group list-group-flush"></ul></li>');
        }
    }

    function topBarTags(tagName) {
        var checkForParent = tagName.split("-").length;
        var topBarTagName;
        var tagAttribute;
        if (checkForParent != 1) {
            topBarTagName = tagName.split("-")[1];
            tagAttribute = tagName.split("-")[0] + "/" + topBarTagName;
            
        } else {
            topBarTagName = tagName.split("-")[0];
            tagAttribute = topBarTagName;
            
        }

        if (window.facetTagArrayGlobal.indexOf(tagName) == -1) {
            window.facetTagArrayGlobal.push(tagName);
            $(".facet-summary-list").append('<li class="facet-summary-item" name="' + topBarTagName + '" id="' + tagName + '" tags="' + tagAttribute + '" facet-section-name="capabilities-search_subcategory">' + capitalizeFirstLetter(topBarTagName) + '<span class="closeTab"   style="padding-left: 10px">x</span></li>');
            var ele = document.querySelector(':root');
            var cs = getComputedStyle(ele);
            var colorValue=(cs.getPropertyValue('--secondaryColor'))
            $('.' + tagName).css("color", colorValue)
            displayTiles(tagAttribute);
        } else {
            for (var i = 0; i < window.facetTagArrayGlobal.length; i++) {
                if (window.facetTagArrayGlobal[i] === tagName) {
                    var spliced = window.facetTagArrayGlobal.splice(i, 1);
                }
            }
            $('#' + tagName).remove();
            if (checkForParent != 1) {
                $('.' + tagName).css("color", 'white')
            }
            displayTiles(tagAttribute);
        }
        displayRemoveAllButton();
    }

    function displayTiles(tagAttribute) {
        var jsonObj = window.jsonGlobal;
        window.tagAttribute = tagAttribute

        var collection = _.filter(jsonObj.pages, function(myObject) {
            var tagInElement = window.tagAttribute;
            var tagObject = myObject.tags;
            var tagObjectToString = JSON.stringify(tagObject);
            if (tagObjectToString.includes(tagInElement)) {
                return myObject.tags;
            }
        });

        var tagLength = tagAttribute.split("/").length;
        var parentTag;
        var parentTag = tagAttribute.split("/").join("-");

        for (var key in collection) {
            var item = collection[key];
            var pageToAdd = document.getElementsByName(item.pageTitle);
            if (pageToAdd.length < 1) {
                $(".projectOne").append('<div class="search-result-item ' + item.tags + '" id="' + item.pageTitle + '" name="' + item.pageTitle + '" ><div><div class="search-result-item"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><div><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"><div><img class="tilesImage"  alt="' + item.imageAltText + '" src="' + item.imagePath + '"></div></a><h3 class="field-title" style="text-decoration:none;"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><a title="' + item.pageTitle + '" href="' + item.pageUrl + '">' + item.pageTitle + '</a></h3></div></div></div>');
            } else {
                removeTiles(tagAttribute, item.pageTitle);
            }
        }
    }

    function removeTiles(tagAttribute, pageTitle) {
        var splitCheck = tagAttribute.includes("/");
        if (splitCheck) {
            var parent = tagAttribute.split("/")[0];
            if (window.facetTagArrayGlobal.indexOf(parent) == -1) {
                document.getElementById(pageTitle).remove();
            }
        } else {
            var child = window.parentChildMap.get(tagAttribute);
            if (typeof child == "object") {
                for (var i = 0; i < child.length; ++i) {
                    if (window.facetTagArrayGlobal.indexOf(child[i]) == -1) {
                        var page = $(document.getElementById(pageTitle)).attr("class").split(" ")[1].split("/").join("-");
                        if (window.facetTagArrayGlobal.indexOf(page) == -1) {
                            if (document.getElementsByName(pageTitle).length == 1) {
                                document.getElementById(pageTitle).remove();
                                break;
                            }
                        }
                    }
                }
            } else {
                if (window.facetTagArrayGlobal.indexOf(child) == -1) {
                    document.getElementById(pageTitle).remove();
                }
            }
        }
    }

    function displayRemoveAllButton() {
        if (window.facetTagArrayGlobal.length > 0) {
            $(".bottom-remove-filter").css("display", "block");
        } else {
            $(".bottom-remove-filter").css("display", "none");
            location.reload();
        }
    }


    $(document).on("click", ".sidebar-btn", function() {
        $(".loadMore").css("display", "none")
        window.onLoadFlag = 1;
        if (window.parentTagFirstCallCounter == 0) {
            $('.search-result-item').remove();
        }
        window.parentTagFirstCallCounter += 1;
    });

    $(document).on("click", ".submenu-btn", function() {
        $(".loadMore").css("display", "none")
        window.onLoadFlag = 1
        if (window.parentTagFirstCallCounter == 0) {
            $('.search-result-item').remove();
        }
        window.parentTagFirstCallCounter += 1;
    });

    $(document).on("click", ".sidebar-btn", function() {
        var tagName = $(this).attr("name");
        topBarTags(tagName);
        displayRemoveAllButton();
    });

    $(document).on("click", ".submenu-btn", function() {
        var tagName = $(this).attr("name");
        topBarTags(tagName);
        displayRemoveAllButton();
    });

    $(document).on("click", ".closeTab", function() {
        displayRemoveAllButton();
        window.tagText = $(this).parent().attr("id");
        topBarTags(window.tagText);
    });

    $(document).on("click", ".bottom-remove-filter", function() {
        location.reload();
    });

    $(document).on("click", ".loadMore", function() {

        var jsonObj = window.jsonGlobal;
        var collection = _.filter(jsonObj.pages, function(myObject) {
            return myObject.tags;
        });

        var tilesIncrementCounter;
        if (window.pagination != null) {
            tilesIncrementCounter = window.noOfItems;
        } else {
            tilesIncrementCounter = 1;
        }

        loadMoreTiles(collection, tilesIncrementCounter);
    });

    function loadMoreTiles(collection, tilesIncrementCount) {
        var tilesIncrementCounter = parseInt(tilesIncrementCount);
        var start;
        var end;
        if (window.displayCountGlobal + tilesIncrementCounter < window.totalCountOfTilesGlobal) {
            start = window.displayCountGlobal;
            end = window.displayCountGlobal + tilesIncrementCounter;
            window.displayCountGlobal = end;
        } else {
            start = window.displayCountGlobal;
            end = window.totalCountOfTilesGlobal;
            $(".loadMore").hide();
        }

        for (var i = start; i < end; ++i) {
            var item = collection[i];
            var origin = location.origin;
            $(".projectOne").append('<div class="search-result-item ' + item.tags + '" id="' + item.pageTitle + '" name="' + item.pageTitle + '" ><div><div class="search-result-item"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><div><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"><div><img class="tilesImage"  alt="' + item.imageAltText + '" src="' + item.imagePath + '"></div></a><h3 class="field-title" style="text-decoration:none;"><a title="' + item.pageTitle + '" href="' + item.pageUrl + '"></a><a title="' + item.pageTitle + '" href="' + item.pageUrl + '">' + item.pageTitle + '</a></h3></div></div></div>');
        }


    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

});