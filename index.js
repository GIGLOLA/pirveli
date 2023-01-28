let total = -1;
let number = 0;
let mainList = [
{
    picture:'picture/egon.jpg',
    name:'Egon Schile',
    about:"With his signature graphic style, embrace of figural distortion, and bold defiance of conventional norms of beauty, Egon Schiele was one of the leading figures of Austrian Expressionism. His portraits and self-portraits, searing explorations of their sitters' psyches and sexuality, are among the most remarkable of the 20th century. The artist, who was astoundingly prolific during his brief career, is famous not only for his psychologically and erotically charged works, but for his intriguing biography: his licentious lifestyle marked by scandal, notoriety, and a tragically early death of influenza at age twenty-eight, three days after the death of his pregnant wife, and at a time when he was on the verge of the commercial success that had eluded him for much of his career.",
    style:'Expressionism',
    painting1:'painting/egon1.jpg',
    painting2:'painting/egon2.jpg',
    painting3:'painting/egon3.jpg',
},
{
    picture:'picture/joseph.jpg',
    name:'Joseph Bergler',
    about:"Bergler was born in Salzburg, the son of sculptor Joseph Bergler the Elder (1718–1788) who instructed his son. He moved to Italy in 1776 and stayed in Rome for six years. There he studied under Martin Knoller. He also became acquainted with Mengs, Hamilton and Volpato. In 1786, he returned to live with his parents in Passau. In 1800 he moved to Prague. He created altar-pieces for a number of churches in Prague and the vicinity.During his sojourn in Rome he made a particular study of the works of Raphael. He was patronized by Cardinal Auersperg and Count Thun. He died in Prague, aged 76.",
    style:'Altarpiece',
    painting1:'painting/joseph1.jpg',
    painting2:'painting/joseph2.jpg',
    painting3:'painting/joseph3.jpeg',

},
{
    picture:'picture/alloy.jpg',
    name:'Aloys Wach',
    about:'Aloys Wach or Aloys Ludwig Wachelmayr (sometimes Wachelmeier, 30 April 1892 – 18 April 1940) was an Austrian expressionist painter and graphic artist.[1] He was born in Lambach, Upper Austria, and died in Braunau, Upper Austria. While his birth places him close to the generation that laid the foundations of modern art and especially expressionism, his life as an artist, however, began after cubism, futurism and the expressionists of the Der Blaue Reiter and Die Brücke movements had initiated a time of great changes. In his later life, Wach abandoned his artistic roots and distanced himself from his early expressionist works by turning to religious imagery. Today, however, those early works are seen as his greatest accomplishments.',
    style:'Expressionism',
    painting1:'painting/alloy1.jpg',
    painting2:'painting/alloy2.jpg',
    painting3:'painting/alloy3.jpg',  
},
{
    picture:'picture/oskar.jpg',
    name:'Oskar Kokoschka',
    about:"Oskar Kokoschka was an Austrian artist and poet known for his Expressionist portraits and landscapes. Characterized by staccato brushstrokes and bright colors, the artist created works that seem to shiver with energy. “How do I define a work of art?” he once asked. “It is not an asset in the stock-exchange sense, but a man's timid attempt to repeat the miracle that the simplest peasant girl is capable of at any time, that of magically producing life out of nothing.” Born on March 1, 1886, in Pöchlarn, Austria, he grew up in Vienna and at 18 was awarded a scholarship to the city’s School of Arts and Crafts. In 1908, however, he was dismissed from the institution after he displayed works considered disturbing in both content and technique. A leading figure in Vienna’s avant-garde alongside Egon Schiele, in 1912, he began an affair with Alma Mahler the widow of composer Gustav Mahler and former lover of Walter Gropius",
    style:'Expressionism',
    painting1:'painting/oskar1.jpg',
    painting2:'painting/oskar2.jpg',
    painting3:'painting/oskar3.jpg', 
},
{
    picture:'picture/gott.jpg',
    name:'Gottfried Helnwein',
    about:"Gottfried Helnwein is an Austrian-Irish visual artist. He has worked as a painter, draftsman, photographer, muralist, sculptor, installation and performance artist, using a wide variety of techniques and media.His work is concerned primarily with psychological and sociological anxiety, historical issues and political topics. His subject matter is the human condition. The metaphor for his art is dominated by the image of the child, particularly the wounded child, scarred physically and emotionally from within. His works often reference taboo and controversial issues from recent history.",
    style:'Photo-realism',
    painting1:'painting/gott1.jpg',
    painting2:'painting/gott2.jpg',
    painting3:'painting/gott3.jpg',
},
{
    picture:'picture/ernst.jpg',
    name:'Ernst Fuchs',
    about:"Ernst Fuchs (13 February 1930 – 9 November 2015) was an Austrian painter, draftsman, printmaker, sculptor, architect, stage designer, composer, poet, singer and one of the founders of the Vienna School of Fantastic Realism. In 1972, he acquired the derelict Otto Wagner Villa in Hütteldorf, which he restored and transformed. The villa was inaugurated as the Ernst Fuchs Museum in 1988.Fuchs studied sculpture with Emmy Steinbock (1943), attended the St. Anna Painting School where he studied under Professor Fröhlich (1944), and entered the Academy of Fine Arts in Vienna (1945) where he began his studies under Professor Robin C. Anderson, later moving to the class of Albert Paris von Gütersloh.",
    style:'Sacred art',
    painting1:'painting/ernst1.jpg',
    painting2:'painting/ernst2.jpg',
    painting3:'painting/ernst3.jpg',  
},
]


function display(){
document.getElementById('header-page').setAttribute('style','position: relative;top: 0%;right:0%;')

total = total + 1
if (total > 5){
    total = 0
}
else if (total < 0){
    total = 5
}
document.getElementById('main-page').innerHTML = ''

const picturediv = document.createElement('div')
picturediv.setAttribute('style','display:flex;justify-content: center;margin-top:10px')
const picture = document.createElement('img');
picture.src = mainList[total].picture;
picture.setAttribute('style',';width:150px;border-radius:10px')
picturediv.appendChild(picture)

const namediv = document.createElement('div')
namediv.setAttribute('style','display:flex;justify-content: center;margin-top:10px')
const name = document.createElement('span');
name.innerText = mainList[total].name;
name.setAttribute('style','display:block;font-weight:bold;font-size:40px;')
if(name.innerText == 'Adolf Hitler'){
    name.setAttribute('style','font-family:Sancreek;color:rgb(146, 4, 4);font-size:40px')
}
namediv.appendChild(name)

const aboutdiv = document.createElement('div')
aboutdiv.setAttribute('style','display:flex;justify-content: center;margin-top:20px;')
const about = document.createElement('span');
about.innerText = mainList[total].about;
about.setAttribute('style','display:block;width:600px;text-align:center;')
if(name.innerText == 'Adolf Hitler'){
    about.setAttribute('style','color:white;width:600px;text-align:center')
}
aboutdiv.appendChild(about)

const stylediv = document.createElement('div')
stylediv.setAttribute('style','display:flex;justify-content: center;margin-top:20px')
const style = document.createElement('span');
style.innerText = mainList[total].style;
style.setAttribute('style','display:block;font-size:34px;color:rgb(170, 137, 18)')
stylediv.appendChild(style)

const paintingsdiv = document.createElement('div')
paintingsdiv.setAttribute('style','display:flex;justify-content:space-between;margin-top:20px;margin-bottom:20px;margin-left:40px;margin-right:40px')

const painting1 = document.createElement('img')
painting1.src = mainList[total].painting1;
painting1.setAttribute('style','width:200px;height:237px;object-fit:cover;border-radius:15px')

const painting2 = document.createElement('img')
painting2.src = mainList[total].painting2;
painting2.setAttribute('style','width:200px;height:237px;object-fit:cover;border-radius:15px')

const painting3 = document.createElement('img')
painting3.src = mainList[total].painting3;
painting3.setAttribute('style','width:200px;height:237px;object-fit:cover;border-radius:15px')

paintingsdiv.appendChild(painting1)
paintingsdiv.appendChild(painting2)
paintingsdiv.appendChild(painting3)

append(picturediv)
append(namediv)
append(aboutdiv)
append(stylediv)
append(paintingsdiv)


}
function append(arg){
document.getElementById('main-page').appendChild(arg)
}

function hydra(){
number = number + 1;
if (number == 10){
    const passDiv = document.createElement('div')
    passDiv.id = 'passDiv'
    passDiv.setAttribute('style','margin-top:40px;display:flex;justify-content:center;')
    const pass = document.createElement('input')
    pass.type = 'text'
    pass.placeholder = 'Passwort angeben'
    pass.id = 'password'
    pass.style = 'border-width:2px;border-style:solid;border-color:black;border-radius:5px'
    passDiv.appendChild(pass)
    document.body.appendChild(passDiv)

    const submitDiv = document.createElement('div')
    submitDiv.id = 'submitDiv'
    submitDiv.setAttribute('style','margin-top:5px;display:flex;justify-content:center')
    const submit = document.createElement('button')
    submit.id = 'inverted-5'
    submit.setAttribute('onclick','submit()')
    submit.setAttribute('style','background')
    submit.innerText = 'submit'
    submitDiv.appendChild(submit)
    document.body.appendChild(submitDiv)

}
}
function submit (){
if(document.getElementById('password').value === 'Heil Hitler'){
    document.getElementById('main-page').innerHTML = ''
    document.getElementById('body').setAttribute('style','background-color:black')
    document.getElementById('nazz').setAttribute('style','background-color:red')
    document.getElementById('symbol-ss-button').setAttribute('style','background-color:red')
    document.getElementById('passDiv').remove();
    document.getElementById('submitDiv').remove();
    document.getElementById('symbol1').remove();
    document.getElementById('symbol2').remove();
    document.getElementById('symbol3').remove();
    document.getElementById('symbol4').remove();
    document.getElementById('symbol6').remove();
    document.getElementById('symbol7').remove();
    document.getElementById('symbol8').remove();
    document.getElementById('symbol9').remove();
    document.getElementById('footer-page').setAttribute('style','justify-content:center')
    document.getElementById('header-text').innerText = '"Famous Austrian Painter"'
    document.getElementById('header-text').setAttribute('style','background-color:black;font-family:Sancreek;font-size:60px')
    document.getElementById('header-text').setAttribute('onclick','')
    mainList = [{
    picture:'picture/hitler.jpg',
    name:'Adolf Hitler',
    about:"Hitler’s personal life had grown more relaxed and stable with the added comfort that accompanied political success. After his release from prison, he often went to live on the Obersalzberg, near Berchtesgaden. His income at this time was derived from party funds and from writing for nationalist newspapers. He was largely indifferent to clothes and food but did not eat meat and gave up drinking beer (and all other alcohols). His rather irregular working schedule prevailed. He usually rose late, sometimes dawdled at his desk, and retired late at night. At Berchtesgaden, his half sister Angela Raubal and her two daughters accompanied him. Hitler became devoted to one of them, Geli, and it seems that his possessive jealousy drove her to suicide in September 1931. For weeks Hitler was inconsolable. Some time later Eva Braun, a shop assistant from Munich, became his mistress. Hitler rarely allowed her to appear in public with him.",
    style:'JewHatism',
    painting1:'painting/adolf1.jpg',
    painting2:'painting/adolf2.jpg',
    painting3:'painting/adolf3.jpg',
    }]
    total = -1;
    display();
    
    
}
else{
    number = 0 
    document.getElementById('passDiv').remove();
    document.getElementById('submitDiv').remove();
}
}