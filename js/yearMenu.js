
url = window.location.href;

urlYearF = parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]);
urlYearW = urlYearF+1;
urlYears = urlYearF + "-" + urlYearW;
sysYear = new Date().getFullYear();

if (document.getElementsByClassName("transition").length == 0) {

    var yearMenuBarDIV = document.createElement('div');
    yearMenuBarDIV.id = "navigation";
    yearMenuBarDIV.style.padding = "0px";
    yearMenuBarDIV.style.margin = "0px";

    var yearMenuBarTABLE = document.createElement('table');
    yearMenuBarTABLE.style.width = "100%";
    yearMenuBarDIV.appendChild(yearMenuBarTABLE)

    for (j = 2009; j <= sysYear; j += 10)
    {
        var yearMenuBarTR = document.createElement('tr');
        yearMenuBarTABLE.appendChild(yearMenuBarTR)

        for (i = j; i < j+10; i++)
        {
            yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));

            var yearMenuItemTD = document.createElement('td');
            yearMenuItemTD.style.padding = "0px";
            yearMenuItemTD.style.width = "10%";
            yearMenuItemTD.style.height = "30px";
            yearMenuItemTD.style.backgroundColor = "#2c566d";
            yearMenuBarTABLE.appendChild(yearMenuItemTD);

            var yearMenuItemDIV = document.createElement('div');
            yearMenuItemDIV.style.width = "94px";
            yearMenuItemDIV.style.height = "30px";
            yearMenuItemDIV.style.backgroundColor = "#FFFFFF";
            yearMenuItemDIV.style.borderRadius = "8px 8px 0px 0px";

            var yearMenuItemA = document.createElement('a');

            yearMenuItemA.innerHTML = i + "-" + (i + 1);
            yearMenuItemA.style.margin = "4px 10px";
            yearMenuItemA.style.borderRadius = "8px";
            yearMenuItemA.style.color = "#FFFFFF";


            if (i == urlYearF){
                yearMenuItemA.innerHTML = "<b>" + yearMenuItemA.innerHTML + "</b>";
                yearMenuItemA.style.color = "#5b5b5a";
                yearMenuItemA.style.padding = "4px 2px";
                yearMenuItemDIV.appendChild(yearMenuItemA)
                yearMenuItemTD.appendChild(yearMenuItemDIV)
            }
            else {
                yearMenuItemTD.appendChild(yearMenuItemA);
                if (i == urlYearF - 1) {
                    yearMenuItemTD.style.borderRadius = "0px 0px 8px 0px";
                }
                else if (i == urlYearF + 1) {
                    yearMenuItemTD.style.borderRadius = "0px 0px 0px 8px";
                }
                if (i > sysYear) {
                    yearMenuItemA.style.color = "#396A84";
                }
                else {
                    yearMenuItemA.setAttribute("href", yearMenuItemURL);
                }
            }
        }
    }

    var container = document.getElementById("container");
    console.log(yearMenuBarDIV);
    container.insertBefore(yearMenuBarDIV, container.getElementsByClassName("breadcrumb")[0]);

    document.getElementById('top-content').innerHTML="";
}
else {

    for (j = 2009; j <= sysYear; j += 10)
    {
        var yearMenuBarDIV = document.createElement('div');
        yearMenuBarDIV.id = "navigation";
        yearMenuBarDIV.style.backgroundColor = "#FFFFFC";

        var yearMenuBarUL = document.createElement('ul');
        yearMenuBarUL.className = "sf-menu sf-main-menu";
        yearMenuBarUL.style.height = "33px";
        yearMenuBarDIV.appendChild(yearMenuBarUL);

        for (i = j; i < j+10; i++)
        {
            yearMenuItemURL = url.replace(/20[0-9][0-9]-20[0-9][0-9]/, i+"-"+(i+1));

            var yearMenuItemLI = document.createElement('li');
            yearMenuItemLI.style.backgroundColor = "#444844";
            yearMenuItemLI.style.textAlign = "center";
            yearMenuBarUL.appendChild(yearMenuItemLI);

            var yearMenuItemDIV = document.createElement('div');
            yearMenuItemDIV.style.backgroundColor = "#FFFFFC";
            yearMenuItemDIV.style.borderRadius = "8px 8px 0px 0px";
            yearMenuItemDIV.style.width = "94px";
            yearMenuItemDIV.style.height = "33px";

            var yearMenuItemA = document.createElement('a');
            yearMenuItemA.setAttribute("href", yearMenuItemURL);
            yearMenuItemA.innerHTML = i + "-" + (i + 1);
            yearMenuItemA.style.width = "70px";
            yearMenuItemA.style.height = "17px";
            yearMenuItemA.style.padding = "6px 12px 10px";

            if (i == urlYearF){
                yearMenuItemA.innerHTML = "<b>" + yearMenuItemA.innerHTML + "</b>";
                yearMenuItemA.style.color = "#5b5b5a";
                yearMenuItemLI.style.pointerEvents = "none";
                yearMenuItemDIV.appendChild(yearMenuItemA)
                yearMenuItemLI.appendChild(yearMenuItemDIV)
            }
            else {
                yearMenuItemLI.appendChild(yearMenuItemA)
                if (i == urlYearF - 1) {
                    yearMenuItemLI.style.borderRadius = "0px 0px 8px 0px";
                }
                else if (i == urlYearF + 1) {
                    yearMenuItemLI.style.borderRadius = "0px 0px 0px 8px";
                }
                if (i > sysYear) {
                    yearMenuItemA.style.color = "#5b5b5a";
                    yearMenuItemLI.style.pointerEvents = "none";
                }
            }
        }

        var container = document.getElementById("container");
        console.log(yearMenuBarDIV);
        container.insertBefore(yearMenuBarDIV, container.getElementsByClassName("breadcrumb")[0]);
    }

}

















































