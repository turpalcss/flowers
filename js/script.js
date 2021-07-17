const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');


document.onclick = function(e) {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
            toggle.classList.remove('active');
            navbar.classList.remove('active');
    }
}



toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}


var glide = new Glide('.glide', {
    type: 'carousel',
    gap: 0,
    autoplay: 5000
}).mount();


// gallery 
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{
  filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
}
function preview(element){
  document.querySelector("body").style.overflow = "hidden";
}

// lazy load
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting
          && entry.target.className === 'image__lazy'){
            let imageUrl = entry.target.getAttribute('data-img');
            if(imageUrl){
                entry.target.src = imageUrl;
                observer.unobserve(entry.target);
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#image1'));
observer.observe(document.querySelector('#image2'));
observer.observe(document.querySelector('#image3'));
observer.observe(document.querySelector('#image4'));
observer.observe(document.querySelector('#image5'));
observer.observe(document.querySelector('#image6'));
observer.observe(document.querySelector('#image7'));
observer.observe(document.querySelector('#image8'));
observer.observe(document.querySelector('#image9'));
observer.observe(document.querySelector('#image10'));
observer.observe(document.querySelector('#image11'));
observer.observe(document.querySelector('#image12'));
observer.observe(document.querySelector('#image13'));
observer.observe(document.querySelector('#image14'));
observer.observe(document.querySelector('#image15'));
observer.observe(document.querySelector('#image16'));
observer.observe(document.querySelector('#image17'));
observer.observe(document.querySelector('#image18'));
observer.observe(document.querySelector('#image19'));
observer.observe(document.querySelector('#image20'));
observer.observe(document.querySelector('#image21'));
observer.observe(document.querySelector('#image22'));
observer.observe(document.querySelector('#image23'));
observer.observe(document.querySelector('#image24'));
observer.observe(document.querySelector('#image25'));
observer.observe(document.querySelector('#image26'));
observer.observe(document.querySelector('#image27'));
observer.observe(document.querySelector('#image28'));
observer.observe(document.querySelector('#image29'));
observer.observe(document.querySelector('#image30'));
observer.observe(document.querySelector('#image31'));
observer.observe(document.querySelector('#image32'));
observer.observe(document.querySelector('#image33'));
observer.observe(document.querySelector('#image34'));
observer.observe(document.querySelector('#image35'));
observer.observe(document.querySelector('#image36'));
observer.observe(document.querySelector('#image37'));
observer.observe(document.querySelector('#image38'));
observer.observe(document.querySelector('#image39'));
observer.observe(document.querySelector('#image40'));
observer.observe(document.querySelector('#image41'));
observer.observe(document.querySelector('#image42'));
observer.observe(document.querySelector('#image43'));
observer.observe(document.querySelector('#image44'));
observer.observe(document.querySelector('#image45'));
observer.observe(document.querySelector('#image46'));
observer.observe(document.querySelector('#image47'));
observer.observe(document.querySelector('#image48'));
observer.observe(document.querySelector('#image49'));
observer.observe(document.querySelector('#image50'));
observer.observe(document.querySelector('#image51'));
observer.observe(document.querySelector('#image52'));
observer.observe(document.querySelector('#image53'));
observer.observe(document.querySelector('#image54'));
observer.observe(document.querySelector('#image55'));
observer.observe(document.querySelector('#image56'));
observer.observe(document.querySelector('#image57'));
observer.observe(document.querySelector('#image58'));
observer.observe(document.querySelector('#image59'));
observer.observe(document.querySelector('#image60'));
observer.observe(document.querySelector('#image61'));
observer.observe(document.querySelector('#image62'));
observer.observe(document.querySelector('#image63'));
observer.observe(document.querySelector('#image64'));
observer.observe(document.querySelector('#image65'));
observer.observe(document.querySelector('#image66'));
observer.observe(document.querySelector('#image67'));
observer.observe(document.querySelector('#image68'));
observer.observe(document.querySelector('#image69'));
observer.observe(document.querySelector('#image70'));
observer.observe(document.querySelector('#image71'));
observer.observe(document.querySelector('#image72'));
observer.observe(document.querySelector('#image73'));
observer.observe(document.querySelector('#image74'));
observer.observe(document.querySelector('#image75'));
observer.observe(document.querySelector('#image76'));
observer.observe(document.querySelector('#image77'));
observer.observe(document.querySelector('#image78'));
observer.observe(document.querySelector('#image79'));
observer.observe(document.querySelector('#image80'));
observer.observe(document.querySelector('#image81'));
observer.observe(document.querySelector('#image82'));
observer.observe(document.querySelector('#image83'));
observer.observe(document.querySelector('#image84'));
observer.observe(document.querySelector('#image85'));
observer.observe(document.querySelector('#image86'));
observer.observe(document.querySelector('#image87'));
observer.observe(document.querySelector('#image88'));
observer.observe(document.querySelector('#image89'));
observer.observe(document.querySelector('#image90'));
observer.observe(document.querySelector('#image91'));
observer.observe(document.querySelector('#image92'));
observer.observe(document.querySelector('#image93'));
observer.observe(document.querySelector('#image94'));
observer.observe(document.querySelector('#image95'));
observer.observe(document.querySelector('#image96'));
observer.observe(document.querySelector('#image97'));
observer.observe(document.querySelector('#image98'));
observer.observe(document.querySelector('#image99'));
observer.observe(document.querySelector('#image100'));
observer.observe(document.querySelector('#image101'));
observer.observe(document.querySelector('#image102'));
observer.observe(document.querySelector('#image103'));
observer.observe(document.querySelector('#image104'));
observer.observe(document.querySelector('#image105'));
observer.observe(document.querySelector('#image106'));
observer.observe(document.querySelector('#image107'));
observer.observe(document.querySelector('#image108'));
observer.observe(document.querySelector('#image109'));
observer.observe(document.querySelector('#image110'));
observer.observe(document.querySelector('#image111'));
observer.observe(document.querySelector('#image112'));
observer.observe(document.querySelector('#image113'));
observer.observe(document.querySelector('#image114'));
observer.observe(document.querySelector('#image115'));
observer.observe(document.querySelector('#image116'));
observer.observe(document.querySelector('#image117'));
observer.observe(document.querySelector('#image118'));
observer.observe(document.querySelector('#image119'));
observer.observe(document.querySelector('#image120'));
observer.observe(document.querySelector('#image121'));
observer.observe(document.querySelector('#image122'));
observer.observe(document.querySelector('#image123'));
observer.observe(document.querySelector('#image124'));
observer.observe(document.querySelector('#image125'));
observer.observe(document.querySelector('#image126'));
observer.observe(document.querySelector('#image127'));
observer.observe(document.querySelector('#image128'));
observer.observe(document.querySelector('#image129'));
observer.observe(document.querySelector('#image130'));
observer.observe(document.querySelector('#image131'));
observer.observe(document.querySelector('#image132'));
observer.observe(document.querySelector('#image133'));
observer.observe(document.querySelector('#image134'));
observer.observe(document.querySelector('#image135'));
observer.observe(document.querySelector('#image136'));
observer.observe(document.querySelector('#image137'));
observer.observe(document.querySelector('#image138'));
observer.observe(document.querySelector('#image139'));
observer.observe(document.querySelector('#image140'));
observer.observe(document.querySelector('#image141'));
observer.observe(document.querySelector('#image142'));
observer.observe(document.querySelector('#image143'));
observer.observe(document.querySelector('#image144'));
observer.observe(document.querySelector('#image145'));
observer.observe(document.querySelector('#image146'));
observer.observe(document.querySelector('#image147'));
observer.observe(document.querySelector('#image148'));
observer.observe(document.querySelector('#image149'));
observer.observe(document.querySelector('#image150'));
observer.observe(document.querySelector('#image151'));
observer.observe(document.querySelector('#image152'));
observer.observe(document.querySelector('#image153'));
observer.observe(document.querySelector('#image154'));
observer.observe(document.querySelector('#image155'));
observer.observe(document.querySelector('#image156'));
observer.observe(document.querySelector('#image157'));
observer.observe(document.querySelector('#image158'));
observer.observe(document.querySelector('#image159'));
observer.observe(document.querySelector('#image160'));
observer.observe(document.querySelector('#image161'));
observer.observe(document.querySelector('#image162'));
observer.observe(document.querySelector('#image163'));
observer.observe(document.querySelector('#image164'));
observer.observe(document.querySelector('#image165'));
observer.observe(document.querySelector('#image166'));
observer.observe(document.querySelector('#image167'));
observer.observe(document.querySelector('#image168'));
observer.observe(document.querySelector('#image169'));
observer.observe(document.querySelector('#image170'));
observer.observe(document.querySelector('#image171'));
observer.observe(document.querySelector('#image172'));
observer.observe(document.querySelector('#image173'));
observer.observe(document.querySelector('#image174'));
observer.observe(document.querySelector('#image175'));
observer.observe(document.querySelector('#image176'));
observer.observe(document.querySelector('#image177'));
observer.observe(document.querySelector('#image178'));
observer.observe(document.querySelector('#image179'));
observer.observe(document.querySelector('#image180'));
observer.observe(document.querySelector('#image181'));
observer.observe(document.querySelector('#image182'));
observer.observe(document.querySelector('#image183'));
observer.observe(document.querySelector('#image184'));
observer.observe(document.querySelector('#image185'));
observer.observe(document.querySelector('#image186'));
observer.observe(document.querySelector('#image187'));
observer.observe(document.querySelector('#image188'));
observer.observe(document.querySelector('#image189'));
observer.observe(document.querySelector('#image190'));
observer.observe(document.querySelector('#image191'));
observer.observe(document.querySelector('#image192'));
observer.observe(document.querySelector('#image193'));
observer.observe(document.querySelector('#image194'));
observer.observe(document.querySelector('#image195'));
observer.observe(document.querySelector('#image196'));
observer.observe(document.querySelector('#image197'));
observer.observe(document.querySelector('#image198'));
observer.observe(document.querySelector('#image199'));
observer.observe(document.querySelector('#image200'));
observer.observe(document.querySelector('#image201'));
observer.observe(document.querySelector('#image202'));
observer.observe(document.querySelector('#image203'));
observer.observe(document.querySelector('#image204'));
observer.observe(document.querySelector('#image205'));
observer.observe(document.querySelector('#image206'));
observer.observe(document.querySelector('#image207'));
observer.observe(document.querySelector('#image208'));
observer.observe(document.querySelector('#image209'));
observer.observe(document.querySelector('#image210'));
observer.observe(document.querySelector('#image211'));
observer.observe(document.querySelector('#image212'));
observer.observe(document.querySelector('#image213'));
observer.observe(document.querySelector('#image214'));
observer.observe(document.querySelector('#image215'));
observer.observe(document.querySelector('#image216'));
observer.observe(document.querySelector('#image217'));
observer.observe(document.querySelector('#image218'));
observer.observe(document.querySelector('#image219'));
observer.observe(document.querySelector('#image220'));
observer.observe(document.querySelector('#image221'));
observer.observe(document.querySelector('#image222'));
observer.observe(document.querySelector('#image223'));
observer.observe(document.querySelector('#image224'));
observer.observe(document.querySelector('#image225'));
observer.observe(document.querySelector('#image226'));
observer.observe(document.querySelector('#image227'));
observer.observe(document.querySelector('#image228'));
observer.observe(document.querySelector('#image229'));
observer.observe(document.querySelector('#image230'));
observer.observe(document.querySelector('#image231'));
observer.observe(document.querySelector('#image232'));
observer.observe(document.querySelector('#image233'));
observer.observe(document.querySelector('#image236'));
observer.observe(document.querySelector('#image237'));
observer.observe(document.querySelector('#image238'));
observer.observe(document.querySelector('#image239'));
observer.observe(document.querySelector('#image240'));
observer.observe(document.querySelector('#image241'));
observer.observe(document.querySelector('#image242'));
observer.observe(document.querySelector('#image243'));
observer.observe(document.querySelector('#image244'));
observer.observe(document.querySelector('#image245'));
observer.observe(document.querySelector('#image246'));
observer.observe(document.querySelector('#image247'));
observer.observe(document.querySelector('#image248'));
observer.observe(document.querySelector('#image249'));
observer.observe(document.querySelector('#image250'));
observer.observe(document.querySelector('#image251'));
observer.observe(document.querySelector('#image252'));
observer.observe(document.querySelector('#image253'));
observer.observe(document.querySelector('#image254'));
observer.observe(document.querySelector('#image255'));
observer.observe(document.querySelector('#image256'));
observer.observe(document.querySelector('#image257'));
observer.observe(document.querySelector('#image258'));
observer.observe(document.querySelector('#image259'));
observer.observe(document.querySelector('#image260'));