function screenColor(color){
    screenArray.forEach((section)=>{
        section.style.backgroundColor=color;
        section.style.transition='1500ms';
    });
    // color inside lock handle
    document.querySelector('.innerHandle').style.backgroundColor=color;
}
function start(){
    wallpaperRemove();
    screenColor('rgb(4,4,4)');

    //logo inserting
    const startLogo=document.createElement('div');
    startLogo.classList.add('startLogo');
    screenSection5.append(startLogo);

    //removing logo
    setTimeout(() => {

        //wallpaper
        wallpeperAdd();

        startLogo.remove();
        blink(2000);
    // make delay 4000
    }, 400 );



    // flash functionality
    document.querySelector('.torch').addEventListener('click',()=>{
        flash(2000);
    });

}
function wallpeperAdd(){
    //wallpaper add
    screenSection1.classList.add('leftNotchW');
    screenSection2.classList.add('middleNotchBackgroundW');
    screenSection3.classList.add('rightNotchW');
    screenSection4.classList.add('upperScreenW');
    screenSection5.classList.add('middleScreenW');
    screenSection6.classList.add('lowerScreenW');
    //color inside lock handle
    document.querySelector('.innerHandle').classList.add('innerHandleW');
    // content add
    document.querySelector('.jio').style.display='block';
    document.querySelector('.notchContent').style.display='flex';    
    document.querySelector('.screenLock').style.display='flex';   
    //time add
    document.querySelector('.dateContentCover').display='flex';
    let today=new Date();
    let hour=today.getHours();
    let minutes=today.getMinutes();

    if(minutes===0){minutes='00';}else if(minutes<10){minutes=`0${minutes}`;}

    if(hour>12){hour-=12;}

    let time = hour+':'+minutes;
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let day=days[today.getDay()-1];
    let date=today.getDate();
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month=months[today.getMonth()-1];

    document.querySelector('.day').innerText=`${day},${date}${month}`;
    document.querySelector('.time').innerText=`${time}`;

    //bottom screen
    document.querySelector('.torchButtonCover').style.display='flex';
    document.querySelector('.homeBarCover').style.display='flex';
    document.querySelector('.camButtonCover').style.display='flex';

    //notificationCenter
    document.querySelector('.notificationCenter').style.display='flex';

    //msg adding
    document.querySelector('.msg').addEventListener('click',()=>{notificationEffect()});

}
function wallpaperRemove(){
    //wallpaper remove
    screenSection1.classList.remove('leftNotchW');
    screenSection2.classList.remove('middleNotchBackgroundW');
    screenSection3.classList.remove('rightNotchW');
    screenSection4.classList.remove('upperScreenW');
    screenSection5.classList.remove('middleScreenW');
    screenSection6.classList.remove('lowerScreenW');
    //content remove
    document.querySelector('.jio').style.display='none';
    document.querySelector('.notchContent').style.display='none';
    document.querySelector('.screenLock').style.display='none'; 

    //date time remove
    document.querySelector('.dateContentCover').display='none';

    //bottom screen
    document.querySelector('.torchButtonCover').style.display='none';
    document.querySelector('.homeBarCover').style.display='none';
    document.querySelector('.camButtonCover').style.display='none';

    //notificationCenter
    document.querySelector('.notificationCenter').style.display='none';
}


function notificationEffect(){
    //copying html
    dump=document.querySelector('.notificationCenter').innerHTML;

    //msg spread
    let msg1=document.getElementById('1');
    let msg2=document.getElementById('2');
    let msg3=document.getElementById('3');
    let msg4=document.getElementById('4');
    let msg5=document.getElementById('5');

    msg1.classList.remove('msg1');
    msg2.classList.remove('msg2');
    msg3.classList.remove('msg3');
    msg4.classList.remove('msg4');
    msg5.classList.remove('msg5');
    
    //changing top msg txt
    document.querySelector('.msgContent').innerText='Hello';

    //showless add
    setTimeout(()=>{
        let dump2=document.querySelector('.notificationCenter').innerHTML;
        let dumpplus='<div class="showLess"><div class="not">Notification</div><div class="minimize">Show Less</div></div>'+dump2;
        document.querySelector('.notificationCenter').innerHTML=dumpplus;
       
    },610);

    //show less function
    setTimeout(()=>{

        document.querySelector('.minimize').addEventListener('click',()=>{

            document.getElementById('1').classList.add('msg1');
            document.getElementById('2').classList.add('msg2');
            document.getElementById('3').classList.add('msg3');
            document.getElementById('4').classList.add('msg4');
            document.getElementById('5').classList.add('msg5');
    
            document.querySelector('.notificationCenter').innerHTML=dump;
            document.querySelector('.msg').addEventListener('click',()=>{notificationEffect()});
        });
    
    },700);
  
}


function blink(duration){
    let blink=setInterval(() => {
        const infra=document.querySelector('.notchInfra');
        infra.classList.add('notchInfraBlink');
        setTimeout(()=>{
            infra.classList.remove('notchInfraBlink');
        },200)
    }, 400);

    setTimeout(() => {
        clearInterval(blink);
    }, duration);
}

function flash(duration){
        const ledYellow=document.querySelectorAll('.leds1');
        const ledPink=document.querySelectorAll('.leds2');
        ledYellow.forEach((led)=>{
            led.classList.add('light');
        });
        ledPink.forEach((led)=>{
            led.classList.add('light');
        });

        setTimeout(() => {


        ledYellow.forEach((led)=>{
            led.classList.remove('light');
        });
        ledPink.forEach((led)=>{
            led.classList.remove('light');
        });


        }, duration);

        // changing theme
        setTimeout(() => {
            
            if(document.querySelector('.flash').getAttribute('theme')==='black'){

                //torch color
                document.querySelector('.torch').style.backgroundColor='white';
                document.querySelector('.torchHandle').style.backgroundColor='black';
                document.querySelector('.torchLed').style.backgroundColor='black';

                //date time color;
                document.querySelector('.day').style.color='rgba(255,255,255,0.9)';
                document.querySelector('.time').style.color='rgba(255,255,255,0.9)';

                document.querySelector('.phonePosition').style.backgroundImage='linear-gradient(0deg,rgb(255, 75, 153),rgb(167, 235, 255),rgb(65, 198, 255))';

                document.querySelector('.phoneUpper').style.backgroundImage='linear-gradient(-10deg,rgba(0, 0, 0, 0.919), rgba(101, 101, 101, 0.87), rgb(229, 229, 229))';
                document.querySelector('.phoneUpperGlass').style.backgroundImage='linear-gradient(135deg,rgb(255, 255, 255), rgba(255, 255, 255, 0.87), rgb(110, 110, 110))';
                
                const tempButtons=document.querySelectorAll('.button');
                tempButtons.forEach((button)=>{button.style.backgroundColor='white';})

                document.querySelector('.buttonRight').style.backgroundColor='white';

                document.querySelector('.dimension').style.backgroundImage='linear-gradient(135deg,rgba(249, 249, 249, 0.919), rgba(255, 255, 255, 0.87), rgb(174, 174, 174))';
                document.querySelector('.dimensionb').style.backgroundImage='linear-gradient(135deg,rgba(255, 255, 255, 0.919), rgba(120, 120, 120, 0.87), rgb(39, 39, 39))';
               
                document.querySelector('.screenb').style.backgroundImage='linear-gradient(135deg,rgb(255, 255, 255), rgb(255, 255, 255),rgb(123, 123, 123))';



                document.querySelector('.flash').removeAttribute('theme');
                document.querySelector('.flash').setAttribute('theme','white');

            }else if(document.querySelector('.flash').getAttribute('theme')==='white'){

                //torch color
                document.querySelector('.torch').style.backgroundColor='';
                document.querySelector('.torchHandle').style.backgroundColor='';
                document.querySelector('.torchLed').style.backgroundColor='';

                //changing day time
                document.querySelector('.day').style.color='rgba(255,255,255,0.7)';
                document.querySelector('.time').style.color='rgba(255,255,255,0.7)';

                document.querySelector('.phonePosition').style.backgroundImage='';
            
                document.querySelector('.phoneUpper').style.backgroundImage='';
                document.querySelector('.phoneUpperGlass').style.backgroundImage='';
                
                const tempButtons=document.querySelectorAll('.button');
                tempButtons.forEach((button)=>{button.style.backgroundColor='rgb(122, 122, 122)';})

                document.querySelector('.buttonRight').style.backgroundColor='rgb(58, 58, 58)';

                document.querySelector('.dimension').style.backgroundImage='';
                document.querySelector('.dimensionb').style.backgroundImage='';
               
                document.querySelector('.screenb').style.backgroundImage='';


                document.querySelector('.flash').removeAttribute('theme');
                document.querySelector('.flash').setAttribute('theme','black');
            }
            if(document.querySelector('.flash').getAttribute('theme')==='white'){
 
                    document.querySelector('.phonePosition').style.animationName='liveBackground';
  

            }else if(document.querySelector('.flash').getAttribute('theme')==='black'){

                    document.querySelector('.phonePosition').style.animationName='blackBackground';

            }
        //duration+300
        },10);

}

// ==================================================================================

const screenSection1=document.querySelector('.leftNotch');
const screenSection2=document.querySelector('.middleNotchBackground');
const screenSection3=document.querySelector('.rightNotch');
const screenSection4=document.querySelector('.upperScreen');
const screenSection5=document.querySelector('.middleScreen');
const screenSection6=document.querySelector('.lowerScreen');
const screenArray=[screenSection1,screenSection2,screenSection3,screenSection4,screenSection5,screenSection6];

//for html injecting
var dump;

start();


