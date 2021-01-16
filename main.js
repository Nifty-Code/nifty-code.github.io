function change(e) {
    document.getElementsByClassName("thumbnail-selected")[0].className = "thumbnail";
    e.className = "thumbnail-selected";

    var selectedElement;
    switch (e.id) {
      case "home-control":
        selectedElement = "home"
        break;
      case "projects-control":
        selectedElement = "clients"
        break;
      case "about-control":
        selectedElement = "about"
        break;    
    } 

    var topOffset = 20;
    var height = document.getElementsByClassName("sticky")[0].clientHeight
    var top = document.getElementById(selectedElement).offsetTop - height - topOffset;
    window.scroll({
        top: top,
      });
}

