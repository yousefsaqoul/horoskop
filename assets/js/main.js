
// // function myWitter(){
// //     let inputHoroskop = document.getElementById('horoskop')
// //         if (inputHoroskop.value == 'Mar'){
// //             document.getElementById('mar').style.display = 'block';
// //         } else if (inputHoroskop.value == 'Apr'){
// //             document.getElementsByTagName('figure').style.display = 'none';
// //             document.getElementById('apr').style.display = 'block';
// //         } else {
// //             console.log ('111')
// //         }
// // }


// function myWitter() {
//     let iputHoroskop = document.getElementById('horoskop').value
//     let ergebnisse;

//     switch (iputHoroskop) {
//         case "Mar":
//             ergebnisse = document.getElementById('mar').style.display = "block";
//             break;
//         case "Apr":
//             ergebnisse = document.getElementById('apr').style.display = "block";
//             break;
//         case "May":
//             ergebnisse = document.getElementById('may').style.display = "block";
//             break;
//         case "Jun":
//             ergebnisse = document.getElementById('jun').style.display = "block";
//             break;
//         case "Jul":
//             ergebnisse = document.getElementById('jul').style.display = "block";
//             break;
//         case "Aug":
//             ergebnisse = document.getElementById('aug').style.display = "block";
//             break;
//         case "Sep":
//             ergebnisse = document.getElementById('sep').style.display = "block";
//             break;
//         case "Oct":
//             ergebnisse = document.getElementById('oct').style.display = "block";
//             break;
//         case "Non":
//             ergebnisse = document.getElementById('nov').style.display = "block";
//             break;
//         case "Dec":
//             ergebnisse = document.getElementById('dec').style.display = "block";
//             break;
//         case "Jan":
//             ergebnisse = document.getElementById('jan').style.display = "block";
//             break;
//         case "Feb":
//             ergebnisse = document.getElementById('feb').style.display = "block";
//             break;
//         default:
//             ergebnisse = "Please give a Month"

//     }

//     document.getElementById('foto').innerHTML = ergebnisse;
// }


function myWitter() {
    let eingabe = document.getElementById('horoskop')
    let imgEinfugen = document.getElementById('imgEinfugen')
    let hEinfugen = document.getElementById('myH')
    let textEinfugen = document.getElementById('myFig')


    switch (eingabe.value) {
        case "Mar":
            imgEinfugen.src = 'https://www.horoscopedates.com/img/icon_aries.png'
            hEinfugen.innerHTML = 'Your horoskop is Aries'
            textEinfugen.innerHTML = 'Today your patience might be tested when one or more of your projects gets put on hold by someone… '
            break;
        case "Apr":
            imgEinfugen.src = 'https://www.horoscopedates.com/img/icon_taurus.png'
            hEinfugen.innerHTML = 'Your horoskop is TAURUS'
            textEinfugen.innerHTML = 'Your intense energy makes you a great candidate for a leadership position right now, so if you are…'
            break;
        case "May":
            imgEinfugen.src = 'https://www.horoscopedates.com/img/icon_gemini.png'
            hEinfugen.innerHTML = 'Your horoskop is GEMINI'
            textEinfugen.innerHTML = 'If you aren t sure if you are ready to commit to a party, a date, a new job, or anything else that'
            break;
        case "Jun":
            imgEinfugen.src = 'https://www.horoscopedates.com/img/icon_cancer.png'
            hEinfugen.innerHTML = 'Your horoskop is CANCER'
            textEinfugen.innerHTML = 'Too many different elements in your life are overlapping with each other right now—and it s your…'
            break;

        case "Jul":
            imgEinfugen.src = 'https://www.horoscopedates.com/img/icon_leo.png'
            hEinfugen.innerHTML = 'Your horoskop is LEO'
            textEinfugen.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your… "
            break;

        case "Aug":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_virgo.png"
            hEinfugen.innerHTML = 'Your horoskop is VIRGO'
            textEinfugen.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            break;

        case "Sep":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_libra.png"
            hEinfugen.innerHTML = 'Your horoskop is LIBRA '
            textEinfugen.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
            break;

        case "Oct":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_scorpio.png"
            hEinfugen.innerHTML = 'Your horoskop is SCORPIO'
            textEinfugen.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            break;

        case "Nov":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_sagittarius.png"
            hEinfugen.innerHTML = 'Your horoskop is SAGITTARIUS '
            textEinfugen.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            break;

        case "Dec":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_capricorn.png"
            hEinfugen.innerHTML = 'Your horoskop is CAPRICORN'
            textEinfugen.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
            break;

        case "Jan":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_aquarius.png"
            hEinfugen.innerHTML = 'Your horoskop is AQUARIUS'
            textEinfugen.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case "Feb":
            imgEinfugen.src = "https://www.horoscopedates.com/img/icon_pisces.png"
            hEinfugen.innerHTML = 'Your horoskop is PISCES'
            textEinfugen.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            break;
        default:
            hEinfugen.innerHTML = "Please give a Month"




    }


}