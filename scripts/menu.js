
(function(){

            var menu_onload = function(){

                var expand_menu = function(i){

                    console.log("expanding menu : "+i);    
                    if(menu_expand[i].className.indexOf('exp')!==-1)
                    {
                        menu_expand[i].className = menu_expand[i].className.replace(' exp','');
                    } else {
                        menu_expand[i].className = menu_expand[i].className + " exp"
                    }

                }

                var menu_expand = document.querySelectorAll("[data-menu-expand]");
                    
                if (menu_expand.length==0){
                    return;
                }
                console.log("The lenght is : "+menu_expand.length);

                for (var k=0; k<menu_expand.length; k++){
                                
                    (function(k){

                        console.log(k);                    
                        menu_expand[k].addEventListener("click", function(){
                                expand_menu(k);
                        });   

                    })(k);
                }

            }

            window.addEventListener("load", menu_onload);

})();

