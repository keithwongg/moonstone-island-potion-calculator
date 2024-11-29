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
(2, 'Stone Fruit', 1, 1, 20, 6, false, 0, 50, 0, 0, 0, 0, 0, 0, 0),
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

init().then((sqlite3) => {
    const db = new sqlite3.oo1.DB();
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
   setCropsDropdownValues(db);

});

function setCropsDropdownValues(db)
{
    const sql = "select id, name from crops";
    let rows = [];
    db.exec({
        sql,
        rowMode: "object",
        resultRows: rows,
    });
    console.log(rows);

    // set to 2 dropdowns
    const firstDropdown = document.getElementById("crop-1");
    const secondDropdown = document.getElementById("crop-2");
    populateDropdownWithData(rows, firstDropdown)
    populateDropdownWithData(rows, secondDropdown)
}

function populateDropdownWithData(arr, dropdownElement)
{
    arr.forEach(crop => {
        let option = document.createElement("option");
        option.value = crop.id;
        option.text = crop.name;
        dropdownElement.appendChild(option);
    })
}
