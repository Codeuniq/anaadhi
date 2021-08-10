var db = firebase.firestore();

let menulist = document.querySelector('#veg-list');

db.collection('Vegetables').get().then((snapshot)=>{
          getInfo(snapshot.docs);
      });

      function getInfo(data){
        var html = "";
        var el = document.getElementById("veg-list");
        data.forEach(doc => {
           var item = doc.data();
            console.log(item.name);
            console.log(item.price);
            console.log(item['malayalam-name']);
            // console.log(el);
            html += "<!-- Item starts -->";
            html +=" <div class=\"menu-item\">";
            html += " <div>";
            html += "   <div class=\"row border-dot no-gutters\">";
            html += "     <div class=\"col-8 menu-item-name\"> <h6>"+ item.name +" ( "+ item['malayalam-name'] +" ) </h6> </div>";
            html += "     <div class=\"col-4 menu-item-price text-right\"> <h6>&#8377;"+ item.price +"/Kg</h6> </div>";
            html += "   </div></div></div>";
            html += "<!-- Item ends -->";
        });
        el.innerHTML = html;
      }
