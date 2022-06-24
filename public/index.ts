import { Schema } from "mongoose";

async function handleAddCat(event) {
    try {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.valueAsNumber;
        const color = event.target.color.value;
        const image = event.target.image.value;
        if (!name || !age || !color || !image) throw new Error("All field are requierd");
        //@ts-ignore
        const { data } = await axios.post('/cats/add-cat', { name, age, color, image });
        if (!data) throw new Error("Couldn't recive data from axios POST: /cats/add-cat ");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleGetCats() {
    try {
        console.log('get All Cats');
        //@ts-ignore
        const { data } = await axios.get('/cats/get-cats');
        if (!data) throw new Error("Couldn't recive data from axios GET: /cats/get-cats ");
        const { catsDB, error } = data;
        console.log(catsDB);
        if (error) throw new Error(error);
        rednerAllCats(catsDB);
    } catch (error) {
        console.error(error);
    }
}

async function handleGetCatsByAge(event){
    try {
        event.preventDefault();
        const age = event.target.age.value;
        //@ts-ignore
        const { data } = await axios.patch('/cats/get-cats-age', { age });
        if (!data) throw new Error("Couldn't recive data from axios GET: /cats/get-cats-age ");
        const { catsDB, error} = data;
        if(error) throw new Error(error);
        console.log(catsDB);
        rednerAllCats(catsDB);
    } catch (error) {
        console.error(error);
    }
}

function rednerAllCats(cats) {
    const catsContainer = document.getElementById('catsContainer');
    let html = "";
    cats.forEach(cat => {
        html += `
            <div class="cat">
                <h2>Name: ${cat.name}</h2>
                <p>Age: ${cat.age}</p>
                <p>Color: ${cat.color}</p>
                <img src="${cat.image}" width="150px" height="150px" />
            </div>
        `
    });
    catsContainer.innerHTML = html;
}