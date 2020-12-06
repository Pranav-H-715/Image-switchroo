function changeImage() {
    document.getElementById("img1").src = "https://images.unsplash.com/photo-1441100094486-eff37b2c8e19?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
}
var images = ["https://images.unsplash.com/photo-1558900812-b4a72552a5f6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://wildequity.org/wpclone/wp-content/uploads/legacy/images/pale-male1-large.jpg", "https://www.ucsusa.org/sites/default/files/styles/original/public/images/1200-corndrought.jpg?itok=EAJuxQvZ"];
var reasons = ["they clean our air.", "They are habitat for many animals and birds.", "They prevent soil erosion, droughts and floods."];
var counter = 0;

function nextslide() {
    document.getElementById("img1").src = images[counter];
    document.getElementById("save_trees").innerHTML = reasons[counter];
    counter = counter + 1;
    document.getElementById("audio").play();
}
