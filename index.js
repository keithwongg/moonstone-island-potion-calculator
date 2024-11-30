// Enums
const SEASONS = {
    SPRING: 1,
    SUMMER: 2,
    FALL: 3,
    WINTER: 4
}

const LOCATIONS = {
    EARTH_ISLAND: 1,
    AQUATIC: 2,
    POISON_ISLAND: 3,
    ELECTRIC_ISLAND: 4,
    FIRE_ISLAND: 5,
    DARK_ISLAND: 6,
    PSYCHIC_STORM: 7
}

const SCHEMA = `
create table crops(id, name, location, season, sell_price, days_growth_time, reharvest_bool, reharvest_days, stamina, hp, exp, armor, speed, vitality, power, tame);
insert into crops values
(1, 'Flax Flower', 1, 1, 20, 6, false, 0, 20, 0, 0, 0, 0, 0, 0, 10),
(2, 'Stonefruit', 1, 1, 20, 6, false, 0, 50, 0, 0, 0, 0, 0, 0, 0),
(3, 'Cat Tail', 2, 1, 15, 6, true, 3, 20, 0, 0, 0, 3, 0, 0, 0),
(4, 'Lilypad', 2, 1, 15, 7, false, 0, 20, 15, 0, 0, 0, 0, 0, 0),
(5, 'Mandrake', 3, 1, 50, 10, false, 0, -10, 0, 0, 0, 0, 0, -3, 0),
(6, 'Nightshade', 3, 1, 40, 8, false, 0, -10, 0, 0, 0, 0, -3, 0, 0),
(7, 'Bolt', 4, 1, 55, 8, true, 4, 20, 0, 0, 0, 5, 0, 0, 0),
(8, 'Nimbus Plant', 4, 1, 60, 9, false, 0, 20, 0, 0, 0, 0, 0, 3, 0),
(9, 'Fire Flower', 5, 1, 50, 6, false, 0, 20, 0, 0, 0, 0, 0, 0, 30),
(10, 'Hot Pepper', 5, 1, 65, 10, true, 5, 20, 0, 0, 0, 0, 3, 0, 0),
(11, 'Bloodroot', 6, 1, 55, 7, false, 0, 20, 0, 0, 0, -5, 5, 0, 0),
(12, 'Spiritbane', 6, 1, 90, 11, false, 0, 20, 0, 0, 0, -5, 0, 5, 0),
(13, 'Magic Mushroom', 7, 1, 55, 7, false, 0, 100, 0, 0, 0, 0, 0, 0, 0),
(14, 'Yarrow', 7, 1, 82, 10, false, 0, 20, 30, 0, 0, 0, 0, 0, 0),
(15, 'Mossball', 1, 2, 20, 4, false, 0, 20, 10, 0, 0, 1, 0, 1, 0),
(16, 'Popsiplant', 1, 2, 23, 5, false, 0, 20, 0, 0, 0, 2, 1, 0, 0),
(17, 'Beach Peach', 2, 2, 20, 4, false, 0, 40, 0, 0, 0, 0, 0, 0, 0),
(18, 'Pinwheel Flower', 2, 2, 20, 4, false, 0, 40, 0, 0, 0, 0, 0, 0, 0),
(19, 'Erdenleaf', 3, 2, 40, 6, false, 0, 20, 0, 0, -2, 0, 0, 0, 0),
(20, 'Umbrellashroom', 3, 2, 26, 5, false, 0, 20, 0, 0, 0, 0, -1, -2, 0),
(21, 'Stun Flower', 4, 2, 53, 6, false, 0, 20, 0, 0, 0, 2, 0, 0, 30),
(22, 'Zaplant', 4, 2, 40, 5, false, 0, 20, 0, 0, 1, 0, 0, 3, 0),
(23, 'Flameroot', 5, 2, 56, 5, false, 0, 20, 0, 0, 0, 4, 0, 0, 0),
(24, 'Hot Air Fruit', 5, 2, 46, 4, false, 0, 20, 20, 50, 0, 0, 0, 0, 0),
(25, 'Prickly Plant', 6, 2, 80, 6, false, 0, 20, 0, 0, 0, 8, 0, -4, 0),
(26, 'Wingfruit', 6, 2, 80, 6, false, 0, 20, 0, 0, 0, 0, -8, 8, 0),
(27, 'Eye Berry', 7, 2, 93, 6, false, 0, 20, 0, 100, 0, 0, 0, 0, 0),
(28, 'Tiny Flower', 7, 2, 66, 4, false, 0, 20, 0, 50, 0, 0, 0, 0, 30),
(29, 'Applum', 1, 3, 30, 9, true, 5, 30, 20, 0, 0, 0, 0, 0, 0),
(30, 'Squish', 1, 3, 27, 8, true, 4, 60, 0, 0, 0, 0, 0, 0, 0),
(31, 'Flag Flower', 2, 3, 24, 7, true, 2, 30, 0, 0, 0, 0, 0, 0, 40),
(32, 'Fuzzball', 2, 3, 27, 8, true, 3, 30, 0, 0, 0, 1, 1, 1, 0),
(33, 'Grumpkin', 3, 3, 35, 7, true, 5, -10, 0, 0, 0, -1, -1, -1, 0),
(34, 'Spiky Plant', 3, 3, 45, 9, true, 5, -10, 0, 0, 0, -3, 0, 0, 0),
(35, 'Electricone', 4, 3, 60, 9, true, 4, 30, 0, 0, 0, 0, 0, 4, 0),
(36, 'Plantern', 4, 3, 65, 8, true, 5, 30, 0, 0, 0, 4, 0, 0, 0),
(37, 'Colberry', 5, 3, 90, 9, true, 4, 30, 40, 0, 0, 0, 0, 0, 0),
(38, 'Heat Plant', 5, 3, 90, 9, true, 4, 30, 0, 0, 0, 0, 4, 0, 0),
(39, 'Skeleplant', 6, 3, 70, 7, true, 3, 30, 0, 0, 2, 0, -2, 0, 0),
(40, 'Spectre Flower', 6, 3, 100, 10, true, 6, 30, 0, 0, 0, -2, 0, 0, 50),
(41, 'Ghostshroom', 7, 3, 100, 10, true, 7, 30, 100, 0, 0, 0, 0, 0, 0),
(42, 'Willowisp', 7, 3, 70, 7, true, 4, 30, 0, 250, 0, 0, 0, 0, 0),
(43, 'Crescent Plant', 1, 4, 57, 13, false, 0, 40, 0, 0, 0, 0, 5, 0, 0),
(44, 'Snowman Plant', 1, 4, 53, 12, true, 5, 40, 50, 0, 0, 0, 1, 0, 0),
(45, 'Chilly Berry', 2, 4, 53, 12, false, 0, 40, 0, 0, 1, 0, 1, 0, 0),
(46, 'Snow Flobes', 2, 4, 53, 12, false, 0, 80, 0, 0, 0, 0, 0, 0, 0),
(47, 'Flake Flower', 3, 4, 73, 11, false, 0, -10, 0, 0, 0, -2, -2, -2, 50),
(48, 'Saplant', 3, 4, 153, 13, true, 6, -10, 0, 0, 0, -5, 0, 0, 0),
(49, 'Bulbshroom', 4, 4, 106, 12, false, 0, 40, 0, 0, 0, 3, 0, 3, 0),
(50, 'Popcorn Plant', 4, 4, 36, 12, true, 5, 40, 0, 0, -1, 0, 0, 0, 0),
(51, 'Ruby Plant', 5, 4, 153, 14, false, 0, 40, 0, 0, 0, 2, 2, 2, 0),
(52, 'Sweater Plant', 5, 4, 153, 14, false, 0, 40, 0, 0, 3, 0, 0, 0, 0),
(53, 'Black Pearl', 6, 4, 166, 13, false, 0, 40, 0, 0, -3, 0, 0, 5, 0),
(54, 'Icicle Root', 6, 4, 173, 13, false, 0, 40, 0, 0, 5, -5, -5, -5, 0),
(55, 'Gift Plant', 7, 4, 186, 14, false, 0, 40, 0, 1000, 0, 0, 0, 0, 0),
(56, 'Snowdrop Flower', 7, 4, 180, 13, false, 0, 40, 0, 500, 0, 0, 0, 0, 100);
`;
var db = undefined;
var dropdownCrops = { 1: undefined, 2: undefined };

window.onload = (evenet) => {

    init().then((sqlite3) => {
        db = new sqlite3.oo1.DB();
        db.exec(SCHEMA);

        /*
        const sql = "select * from crops where season = 2";
        let rows = [];
        db.exec({
            sql,
            rowMode: "object",
            resultRows: rows,
        });
        */
        const data = getCropsDataFromDb();
        setCropsDropdownValues(data);
        setCropsReferenceTable(data);
        selectCrop(1, "Flax Flower");
        selectCrop(2, "Flax Flower");
        setCalculatedStats()
    });

}

// https://github.com/nalgeon/sqlean.js
async function init() {
    const sqlite3 = await sqlite3InitModule({
        print: console.log,
        printErr: console.error,
    });
    const version = sqlite3.capi.sqlite3_libversion();
    console.log(`Loaded SQLite ${version}`);
    return sqlite3;
}

function setCropsDropdownValues(data) {
    // set to 2 dropdowns
    const firstDropdown = document.getElementById("crop-1");
    const secondDropdown = document.getElementById("crop-2");
    populateDropdownWithData(data, firstDropdown)
    populateDropdownWithData(data, secondDropdown)
}

function populateDropdownWithData(data, dropdownElement) {
    data.forEach(crop => {
        let option = document.createElement("option")
        option.value = crop.name
        // option.text = crop.name
        dropdownElement.appendChild(option)
    })
}

function setCropsReferenceTable(data) {
    let tbody = document.getElementById("crops-ref-table-body")
    data.forEach(crop => {
        let colsToSkip = ["reharvest_bool", "sell_price"]
        let tableRow = setCropDataToTableRow(crop, colsToSkip)
        tbody.appendChild(tableRow)
    })
}

function setCropDataToTableRow(crop, skipColumns = [], isConcoction = false) {
    let tableRow = document.createElement("tr")
    for (let prop in crop) {
        let isSkipCol = (col) => prop.toString().includes(col)
        if (skipColumns.length > 0 && skipColumns.some(isSkipCol)) {
            continue
        }

        if (prop.toString().includes("id")) {
            let tData = document.createElement("td")
            let cropName = "";
            crop.name.split(" ").forEach(word => {
                cropName += word
            })
            let image = document.createElement("img")
            image.src = isConcoction ? 'images/Concoction.png' : `images/50px-${cropName}.webp`
            image.alt = crop.Name
            image.classList = isConcoction ? ['display-img-log'] : []
            tData.appendChild(image)
            tableRow.appendChild(tData)
            continue
        }

        if (prop.toString().includes("location")) {
            let location = document.createElement("td")
            location.class = "caps"
            for (let e in LOCATIONS) {
                if (LOCATIONS[e] === crop.location) {
                    location.innerHTML = e.toString()
                }
            }
            tableRow.appendChild(location)
            continue
        }

        if (prop.toString().includes("season")) {
            let seasons = document.createElement("td")
            seasons.class = "caps"
            for (let e in SEASONS) {
                if (SEASONS[e] === crop.season) {
                    seasons.innerHTML = e.toString()
                }
            }
            tableRow.appendChild(seasons)
            continue
        }

        if (prop.toString().includes("reharvest_days")) {
            let reharvest = document.createElement("td")
            reharvest.innerHTML = crop.reharvest_bool ? `Days: ${crop.reharvest_days}` : `No`;
            tableRow.appendChild(reharvest)
            continue
        }

        // all other properties
        let tableData = document.createElement("td")
        tableData.innerHTML = crop[prop]
        tableRow.appendChild(tableData)
    }
    return tableRow
}

function selectDropdown(selectionId, cropElement) {

    let name = cropElement.value
    selectCrop(selectionId, name)
    // check if both dropdown has values, if yes then automatically
    // calculate the result and show.
    // if no, then continue hiding the results section

    clearUnselectedInputData()
    setCalculatedStats()
}

function clearUnselectedInputData() {
    let crop1 = dropdownCrops[1]
    let crop2 = dropdownCrops[2]

    clearSelectedCropTable(crop1, 1)
    clearSelectedCropTable(crop2, 2)

    if (crop1 !== undefined && crop2 !== undefined) {
        return;
    }

    hideCalculatedStats(true)
    clearConcoctionResults()
}

function clearSelectedCropTable(crop, id) {
    if (crop === undefined) {
        let tBody = document.getElementById(`crop-selected-${id}`)
        tBody.innerHTML = ""
    }
}

function clearConcoctionResults() {
    let tbody = document.getElementById("concoction-results")
    tbody.innerHTML = ""
}

function hideCalculatedStats(isHide) {
    let calculatedContainer = document.getElementById("calculated-container")
    if (isHide) {
        calculatedContainer.classList.add('hide')
        return
    }
    calculatedContainer.classList.remove('hide')
}

function setCalculatedStats() {
    let crop1 = dropdownCrops[1]
    let crop2 = dropdownCrops[2]

    hideCalculatedStats(false)

    let tbody = document.getElementById("concoction-results")
    // let colsToSkip = ["location", "season", "sell_price", "days_growth_time", "reharvest_bool", "reharvest_days"]
    tbody.innerHTML =
        ` <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stamina</th>
            <th>Hp</th>
            <th>Exp</th>
            <th>Armor</th>
            <th>Speed</th>
            <th>Vitality</th>
            <th>Power</th>
            <th>Tame</th>
        </tr>`
    let calculatedObject = {
        id: 1000,
        name: 'Concoction',
        stamina: crop1.stamina + crop2.stamina,
        hp: crop1.hp + crop2.hp,
        exp: crop1.exp + crop2.exp,
        armor: crop1.armor + crop2.armor,
        speed: crop1.speed + crop2.speed,
        vitality: crop1.vitality + crop2.vitality,
        power: crop1.power + crop2.power,
        tame: crop1.tame + crop2.tame
    }
    let tableRow = setCropDataToTableRow(calculatedObject, [], true)
    tbody.appendChild(tableRow)
}

function selectCrop(selectionId, name) {
    let crops = querySingleCrop(name)
    dropdownCrops[selectionId] = crops[0]
    let tBody = document.getElementById(`crop-selected-${selectionId}`)
    tBody.innerHTML =
        `<tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stamina</th>
            <th>Hp</th>
            <th>Exp</th>
            <th>Armor</th>
            <th>Speed</th>
            <th>Vitality</th>
            <th>Power</th>
            <th>Tame</th>
        </tr>`
    let colsToSkip = ["location", "season", "sell_price", "days_growth_time", "reharvest_bool", "reharvest_days"]
    let tableRow = setCropDataToTableRow(dropdownCrops[selectionId], colsToSkip)
    setSelectedValueToInput(selectionId, name)
    tBody.appendChild(tableRow)
}

function setSelectedValueToInput(selectionId, name) {
    let input = document.getElementById(`crop-${selectionId}-input`)
    input.value = name
}

function clearInput(id) {
    setSelectedValueToInput(id, "")
    dropdownCrops[id] = undefined
    clearUnselectedInputData()
}

/*
SQL QUERIES
*/
// probably better to select specific cols
function getCropsDataFromDb() {
    const sql = "select * from crops";
    let rows = [];
    db.exec({
        sql,
        rowMode: "object",
        resultRows: rows,
    });
    console.log(rows.length);
    return rows;
}

function querySingleCrop(name) {
    const sql = `select * from crops where name = '${name}'`;
    let rows = [];
    db.exec({
        sql,
        rowMode: "object",
        resultRows: rows,
    });
    return rows
}