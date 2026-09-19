let users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },

    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },

    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1586351012965-861624544334?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
        bio: "walking through dreams ☁️🖤 | late night thinker",
    },

    {
        name: "Ojin Oklawa",
        pic: "https://plus.unsplash.com/premium_photo-1661902183363-5f7eaff9048e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "too glam to give a damn 💅 | filter free soul",
    }
];

function showUsers(arr) {
    arr.forEach(function(user){
// Create card
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

// Create blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

// Create content
const content = document.createElement("div");
content.classList.add("content");

// Create heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Create paragraph
const para = document.createElement("p");
para.textContent = user.bio;

// Add heading and paragraph to content
content.appendChild(heading);
content.appendChild(para);

// Add everything to card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Add card to container

document.querySelector(".cards").appendChild(card);
    });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});