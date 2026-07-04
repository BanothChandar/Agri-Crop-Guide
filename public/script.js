class Crop {
    constructor(name, soilType, season, waterRequired, growthDays, image) {
        this.name = name;
        this.soilType = soilType.toLowerCase();
        this.season = season.toLowerCase();
        this.waterRequired = waterRequired;
        this.growthDays = growthDays;
        this.image = image;
    }

    getHTML() {
        return `
        <div class="crop-card">
            <img src="${this.image}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p><b>Soil:</b> ${this.soilType}</p>
            <p><b>Season:</b> ${this.season}</p>
            <p><b>Water:</b> ${this.waterRequired} L/week</p>
            <p><b>Growth:</b> ${this.growthDays} days</p>
        </div>
        `;
    }
}

const crops = [
    //Pulses & Legumes Plants Data
    new Crop("Wheat", "black soil", "rabi", 500, 140, "/images/wheat.jpeg "),
    new Crop("Rice", "clay soil", "kharif", 700, 150, "/images/Rice.jpg"),
    new Crop("Maize", "sandy soil", "summer", 400, 90, " https://purevege.com/wp-content/uploads/2024/01/l-intro-1688390573.jpg"),
    new Crop("Cotton", "black soil", "kharif", 500, 180, " https://img.freepik.com/premium-photo/beautiful-cotton-fields-full-crops_217593-38249.jpg"),
    new Crop("Tomato", "loamy soil", "summer", 450, 120, "https://media.istockphoto.com/photos/tomato-field-and-modern-agriculture-picture-id900837730?b=1&k=20&m=900837730&s=170667a&w=0&h=tWnj3SBvvwCaWS-cwyr_FxOMXzQaJy6zaTKO9XuXR48= "),
    new Crop("Potato", "loamy soil", "rabi", 400, 110, "https://cdn.mos.cms.futurecdn.net/Ys52dqtT4fLt6m3rpRLdxm.jpg "),
    new Crop("Barley","Loamy soil", "Kharif/Rabi",500,90-150,"https://advancecovercrops.com/wp-content/uploads/2019/06/winter-barley-crop-advance-cover-crops2.jpg"),
    new Crop("Oats", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://png.pngtree.com/thumb_back/fw800/background/20220311/pngtree-a-bowl-of-oats-hd-photography-material-image_1027560.jpg"),
    new Crop("Sorghums", "loamy soil", "Kharif/Rabi","moderate", 90-150,"https://thumbs.dreamstime.com/b/jowar-grain-sorghum-crop-farm-jowar-grain-sorghum-crop-farm-under-blue-sky-105671406.jpg"),
    new Crop("Millet", "loamy soil", "Kharif/Rabi","moderate", 90-150,"https://www.apnikheti.com/upload/crops/4073idea99822149277ef0e90f99c9550bd730200a.jpg"),
    new Crop("Ragi", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://1.bp.blogspot.com/-0PD8xl4wvzA/YM1qtZ2OjYI/AAAAAAABDd4/oOo2oUCdockaXdAJgKp5XVE_lp0hWDg6wCNcBGAsYHQ/s909/Mandua.jpg"),
    new Crop("Bajra", "loamy soil", "Kharif/Rabi","moderate", 90-150,"https://agrosiaa.com/uploads/userdata/crop_images/bajra/bajra_cover_image.png"),
    new Crop("Jowar", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://c8.alamy.com/comp/CE73D4/sorghum-plant-jowar-crop-jawar-farm-family-graminae-sorghum-vulgare-CE73D4.jpg"),
    new Crop("Chickpea", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://media.sciencephoto.com/image/c0073610/800wm/C0073610-Maturing_chickpea_crop.jpg"),
    new Crop("Pigeon pea", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://gardenerspath.com/wp-content/uploads/2022/02/Pigeon-Peas-Growing-in-the-Garden.jpg"),
    new Crop("Green Gram", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://www.alpineseed.com/assets/images/product/green-gram-21.jpg"),
    new Crop("Black Gram", "loamy soil", "Kharif/Rabi","moderate", 90-150,"https://www.agrifarming.in/wp-content/uploads/2020/11/Pic2.jpg"),
    new Crop(" Red Lentil", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://png.pngtree.com/thumb_back/fh260/background/20240811/pngtree-top-view-of-wood-spoon-with-raw-whole-red-lentils-image_16129227.jpg"),
    new Crop("Field Pea", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse1.mm.bing.net/th/id/OIP.nU1WJl7AbjtkS9DXqDcqvwHaHa?pid=Api&P=0&h=180"),
    new Crop("Horse Gram ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://image.slidesharecdn.com/47-48horsegram-210325093143/85/horse-gram-2-320.jpg?cb=1668890938"),
    new Crop("Cowpea ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse3.mm.bing.net/th/id/OIP.tcxDbHyx71AQtnY2NrL-OwHaE8?pid=Api&P=0&h=180"),
    new Crop("Moth Bean", "loamy soil", "Kharif/Rabi","moderate", 90-150,"https://www.vogueitude.com/wp-content/uploads/2021/05/requirements-to-grow-moth-beans.jpg"),
    new Crop("Lentil ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://media.istockphoto.com/photos/lentil-field-picture-id956457938?k=20&m=956457938&s=612x612&w=0&h=f0VwCwkQmnBD3VKZDbG8a-LD6pu5OHWE4BA5lcBLxVU="),
    new Crop("Soybean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse3.mm.bing.net/th/id/OIP.C7YE-c4S4Vm5Ug8MpuFx4wHaEJ?pid=Api&P=0&h=180"),
    new Crop("Groundnut ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://www.zettafarms.com/wp-content/uploads/2024/01/blog-3.jpg"),
    new Crop("French Bean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse4.mm.bing.net/th/id/OIP.-_KtIhcdwbbM3DaOktO2nwHaHa?pid=Api&P=0&h=180"),
    new Crop("Cluster Bean", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse3.mm.bing.net/th/id/OIP.4gKn0wltbYl_qd5ACeeDvwHaE8?pid=Api&P=0&h=180"),
    new Crop("Broad Bean", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://kitchenbun.com/wp-content/uploads/2023/09/fava-bean-skin-and-pods.jpg"),
    new Crop("Kidney Bean", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://www.agrifarming.in/wp-content/uploads/2019/09/Comp1-20.jpg"),
    new Crop("Lima Bean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://www.epicgardening.com/wp-content/uploads/2023/03/Green-beans-growing-off-a-bush-in-the-garden-with-dark-and-moist-soil.jpg"),
    new Crop("Navy Bean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/d6e056cf-c552-44db-b57c-fe271b3e1a83-d979667.jpg?quality=90&fit=700,466"),
    new Crop("Faba Bean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse3.mm.bing.net/th/id/OIP.vBb7q_9ggsnrtzlFvOx3bAHaF3?pid=Api&P=0&h=180"),
    new Crop("Hyacinth Bean ", "loamy soil", "Kharif/Rabi", "moderate", 90-150,"https://tse4.mm.bing.net/th/id/OIP.hbkrDdWWC0kdBtfuQGvL8wHaHa?pid=Api&P=0&h=180"),
// Fruit names.....
    new Crop("Apple ", "Sandy soil", "Winter", "Medium", 61,"https://www.thestatesman.com/wp-content/uploads/2022/09/The-Apple-cultivation-story-is-full-of-challenges-in-India-1.jpg"),
    new Crop(" Banana", "Clay soil", "Rainy", "High", 62,"https://thumbs.dreamstime.com/b/banana-plantation-rows-trees-showcasing-fruit-tropical-agriculture-crop-cultivation-bananas-subtropical-360751205.jpg"),
    new Crop("Mango", "Sandy Loam soil", "All Seasons", "Low", 63,"https://gardeningtips.in/wp-content/uploads/2020/03/Comp1-2.jpg"),
    new Crop("Orange ", "Alluvial soil", "Summer", "Medium", 64,"https://tse1.mm.bing.net/th/id/OIP._bFbIoAQUtfXs2UcXBI2dQHaD4?pid=Api&P=0&h=180"),
    new Crop("Grapes ", "loamy soil", "Winter", "High", 65,"https://tse4.mm.bing.net/th/id/OIP.D6ixoz9FRKG2ahV35UVw3gHaEo?pid=Api&P=0&h=180"),
    new Crop(" Guava", "Sandy soil", "Rainy", "Low", 66,"https://i.pinimg.com/originals/e8/ce/1e/e8ce1e5669d82a7adc364a793abd524f.png"),
    new Crop("Papaya", "Clay soil", "All Seasons","Medium", 67,"https://cdn.mos.cms.futurecdn.net/g7YTkCzPqJcCKSfEQi6hfE.jpg"),
    new Crop("Pineapple ", "Sandy Loam soil", "Summer", "High", 68,"https://tse4.mm.bing.net/th/id/OIP.z2wW4w0hBbA-RIfKpyew-gHaFX?pid=Api&P=0&h=180"),
    new Crop("Strawberry ", "Alluvial soil", "Winter", "Low", 69,"https://tse3.mm.bing.net/th/id/OIP.iskDOqQNhjcd-8HYfDbWQQHaEt?pid=Api&P=0&h=180"),
    new Crop("Watermelon ", "loamy soil", "Rainy","Medium", 70,"https://tse4.mm.bing.net/th/id/OIP.QG9GDZP79mFC1gUArtZ0-wHaDt?pid=Api&P=0&h=180"),
    new Crop(" Muskmelon", "Sandy soil", "All Seasons", "High", 71,"https://thumbs.dreamstime.com/b/one-nearly-ripe-muskmelon-fruit-trees-greenhouse-199383223.jpg"),
    new Crop("Peach ", "Clay soil", "Summer", "Low", 72,"https://tse3.mm.bing.net/th/id/OIP.blWBg2boLLKYMMUgGgYZUAHaEx?pid=Api&P=0&h=180"),
    new Crop("Plum ", "Sandy Loam soil", "Winter", "Medium", 73,"https://images.ctfassets.net/3s5io6mnxfqz/SEPaV0vkLuC3dNR0ya7AK/2222dd7832e29770f85e9ba4c299a267/AdobeStock_168538697.jpeg?fm=jpg&w=1200&fl=progressive"),
    new Crop("Pear ", "Alluvial soil", "Rainy", "High", 74,"https://tse2.mm.bing.net/th/id/OIP.IJHfdu-oErm5FYRbRZx51wHaE8?pid=Api&P=0&h=180"),
    new Crop("Cherry ", "loamy soil", "All Seasons", "Low", 75,"https://www.freshplaza.com/remote/https/agfstorage.blob.core.windows.net/misc/StockPhotos/Cherries/Cherries_FP_img_0017.jpg?preset=OgImage"),
    new Crop("Apricot ", "Sandy soil", "Summer", "Medium", 76,"https://tse1.mm.bing.net/th/id/OIP.KQxx_hhqOz5M9VrHucrWLQHaED?pid=Api&P=0&h=180"),
    new Crop("Fig", "Clay soil", "Winter", "High", 77,"https://cdn.britannica.com/37/82537-050-B0AC543A/figs-fig-tree.jpg"),
    new Crop("Pomegranate", "Sandy Loam soil", "Rainy", "Low", 78,"https://plantix.net/en/library/assets/custom/crop-images/pomegranate.jpeg"),
    new Crop("Kiwi ", "Alluvial soil", "All Seasons", "Medium", 79,"https://cdn.farmjournal.com/s3fs-public/8829FDA0-5795-464E-878B6D2CF1F4B9F9.png"),
    new Crop("Litchi ", "loamy soil", "Summer", "High", 80,"https://www.apnikheti.com/upload/crops/5869idea99lychee-farmingbgjpg2015060211044520150602133747.jpg"),
    new Crop("Sapota ", "Sandy soil", "Winter","Low", 81,"https://thumbs.dreamstime.com/b/sapota-fruit-9663117.jpg"),
    new Crop("Custard Apple ", "Clay soil", "Rainy", "Medium", 82,"https://kj1bcdn.b-cdn.net/media/83266/custard-apple-cultivation.jpg"),
    new Crop("Jackfruit ", "Sandy Loam soil", "All Seasons", "High", 83,"https://tse2.mm.bing.net/th/id/OIP.kjvHHtOos-6McKQlx8-XCQHaD4?pid=Api&P=0&h=180"),
    new Crop("Avocado ", "Alluvial soil", "Summer", "Low", 84,"https://images.healthshots.com/healthshots/en/uploads/2024/04/04153309/avocado-1.jpg"),
    new Crop("Blueberry ", "loamy soil", "Winter", "Medium", 85,"https://tse3.mm.bing.net/th/id/OIP.M6pr6wNoKJof0i5oksUFpwHaFS?pid=Api&P=0&h=180"),
    new Crop("Raspberry ", "Sandy soil", "Rainy", "High", 86,"https://images8.alphacoders.com/857/thumb-1920-857686.jpg"),
    new Crop("Blackberry ", "Clay soil", "All Seasons", "Low", 87,"https://tse1.mm.bing.net/th/id/OIP.OMWWVDwNXtoNxN7u2UDPAgHaFj?pid=Api&P=0&h=180"),
    new Crop("Coconut ", "Sandy Loam soil", "Summer", "Medium",88,"https://tse2.mm.bing.net/th/id/OIP.I9KCD2OSlkqZNAGqm_t5fQHaE8?pid=Api&P=0&h=180"),
    new Crop("Lemon ", "loamy soil", "Winter","High", 89,"https://tse3.mm.bing.net/th/id/OIP.OTRpFQtnqun_XzdMLCTjYgHaFj?pid=Api&P=0&h=180"),
    new Crop(" Lime", "loamy soil", "Rainy","Low", 90,"https://amrafarms.com/wp-content/uploads/2021/02/lemon-g4b5a154ce_1920.jpg"),
    new Crop("Mandarin ", "Sandy soil", "All Seasons","Medium", 91,"https://tse4.mm.bing.net/th/id/OIP.4sCzGs9KnnmxhqPR3oZ1aQHaE8?pid=Api&P=0&h=180"),
    new Crop("Tangerine ", "Clay soil", "Summer", "High", 92,"https://thumbs.dreamstime.com/b/tangerine-tree-25131881.jpg"),
    new Crop("Cranberry ", "loamy soil", "Winter", "Low", 93,"https://img.freepik.com/premium-photo/cranberry-crop-bowl-blue-wooden-table_818261-28923.jpg"),
    new Crop("Gooseberry ", "Alluvial soil", "Rainy", "Medium", 94,"https://images5.alphacoders.com/347/347350.jpg"),
    new Crop("Date ", "Loamy ", "All Seasons ", "High ", 95 ,"https://tse1.mm.bing.net/th/id/OIP.5O_rU3IDEeU7OofWC7a-sAHaEK?pid=Api&P=0&h=180"),
    new Crop("Olive ", "Sandy ", " Summer ", "Low ", 96 ,"https://tse3.mm.bing.net/th/id/OIP.qyvRpMnEtRT58VV8yYk8wQHaDG?pid=Api&P=0&h=180"),
    new Crop("Persimmon ", "Clay ", "Winter  ", "Medium ",  97,"https://gardenerspath.com/wp-content/uploads/2020/11/How-to-Grow-and-Care-for-American-Persimmon-Trees-2.jpg"),
    new Crop("Mulberry ", "Sandy Loam ", " Rainy ", " High", 98 ,"https://wallpapercat.com/w/full/8/d/6/586803-2560x1805-desktop-hd-mulberry-background-photo.jpg"),
    new Crop("Dragon Fruit ", "Alluvial ", " All Seasons ", "Low ", 99 ,"https://tse4.mm.bing.net/th/id/OIP.-mweTIoCTVUzRbuVBmhlmwHaFj?pid=Api&P=0&h=180"),
    new Crop("Star Fruit ", "Sandy ", "Winter  ", " High",101  ,"https://foodprint.org/wp-content/uploads/2021/03/AdobeStock_228758071_1920x960_RFE.jpg"),
    new Crop("Pomelo ", " Clay", "Rainy  ", "Low ", 102 ,"http://www.rosscreektropicals.com.au/cdn/shop/products/pomelo-Nam-roi-2_83bc7940-fd55-49b4-ae00-7b1b0e3fddd3.jpg?v=1695093514"),
    new Crop("Breadfruit ", "Sandy Loam ", " All Seasons ", "Medium ", 103 ,"https://morningchores.com/wp-content/uploads/2020/11/Growing-breadfruit.jpg"),
    new Crop(" Durian", " Alluvial", "Summer  ", "High ", 104 ,"https://img.freepik.com/premium-photo/durian-durio-zibethinus-king-tropical-fruit-hanging-tree-plantation-agricultural-industry-orchard-farming-thailand_536080-773.jpg"),
    new Crop("Longan ", "Loamy ", "Winter  ", "Low",105  ,"https://www.producereport.com/sites/default/files/styles/large/public/field/image/wei_xin_tu_pian_20171121145300.jpg?itok=6eiZY5Kl"),
    new Crop("Rambutan ", "Sandy ", " Rainy ", "Medium ",106  ,"https://media.istockphoto.com/photos/rambutan-picture-id179057715?k=20&m=179057715&s=612x612&w=0&h=yHa5ISaVeRN2gcPBl_ZoGqtWTKxzenSILJC8To4q2kU="),
    new Crop(" Soursop", " Clay", " All Seasons ", "High ",107  ,"https://cdn.shopify.com/s/files/1/0014/1377/5433/files/Soursop_trees.png?v=1744781801"),
    new Crop("Mangosteen ", "Sandy Loam ", "Summer  ", " Low",18  ,"https://i.ytimg.com/vi/-UKrlKWG39o/maxresdefault.jpg"),
    new Crop(" Tamarind", "Alluvial ", "Winter  ", " Medium",109  ,"https://wallpapers.com/images/hd/tamarind-hanging-on-a-tree-hvmb4rkm642gdhwq.jpg"),
    new Crop("Jujube ", "Loamy ", " Rainy ", " High",  110,"https://cdn.pixabay.com/photo/2020/11/11/12/35/jujube-5732389_1280.jpg"),
];

function searchData() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultArea = document.getElementById("resultArea");

    resultArea.innerHTML = "";

    if (input === "") {
        resultArea.innerHTML = "<p>⚠️ Enter soil, season, or crop name</p>";
        return;
    }

    let found = false;

    crops.forEach(crop => {
        if (crop.name.toLowerCase().includes(input) || crop.soilType.includes(input) || crop.season.includes(input) ) {
            resultArea.innerHTML += crop.getHTML();
            found = true;
        }
    });

    if (!found) {
        resultArea.innerHTML = "<p>❌ No matching crops found</p>";
    }
}

function showCrops() {
    const soil = document.getElementById("soilInput").value.toLowerCase().trim();
    const season = document.getElementById("seasonInput").value.toLowerCase().trim();
    const resultArea = document.getElementById("resultArea");

    resultArea.innerHTML = "";

    if (soil === "" || season === "") {
        resultArea.innerHTML = "<p>⚠️ Please enter both soil and season</p>";
        return;
    }

    let found = false;

    crops.forEach(crop => {
        if (crop.soilType.includes(soil) && crop.season.includes(season)) {
            resultArea.innerHTML += crop.getHTML();
            found = true;
        }
    });
    
    if (!found) {
        resultArea.innerHTML = "<p>❌ No crops found for this soil and season</p>";
    }
}
