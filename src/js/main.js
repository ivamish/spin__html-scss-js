import { getItem } from "./modules/services.js";
import modal from "./modules/modal.js";


document.addEventListener("DOMContentLoaded", () => {

    let wheelIsRotating = false, // состояние колеса (крутится ли оно в данный момент)
        duration = 360 * 5, // количество вращений колеса
        rotateStart = null, // начало анимации вращения (для FequestAnimationFrame)
        wheel = document.getElementById('wheel'), //колесо
        count = 7, //количество секторов
        spaceItem = 360 / count; //количество пространства на колисе, которое приходится на один сектор
    

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    document.getElementById('rotate').addEventListener('click', function () {

        if (wheelIsRotating) return false;

        getItem().then(item => {
            
            if(!item) {
                modal({});
            }

            let randomItem = item['item'];
            let randomSpace = getRandomNumber((randomItem * spaceItem) - spaceItem, randomItem * spaceItem - 10) - 35;
            duration = duration + randomSpace;
            console.log(item);

            wheelIsRotating = true;
            wheel.style.transform = 'rotate(0deg)';
            requestAnimationFrame(function mesure(time) {

                if (!rotateStart) {
                    rotateStart = time;
                }

                const progress = time - rotateStart;
                wheel.style.transform = `rotate(-${progress}deg)`;

                if (progress <= duration) {
                    wheelIsRotating = true;
                    requestAnimationFrame(mesure);
                } else {
                    rotateStart = null;
                    wheelIsRotating = false;
                    setTimeout(() => {
                        modal({description: item['description'], image: item['image'], count: item['count']});
                    }, 500);
                }
            });
        });
    });

});

document.getElementById('modalBtn').addEventListener('click', ()=> {
    location.reload();
});