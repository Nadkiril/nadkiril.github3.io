let currentPhoto = 0;

let imagesData = [
    {photo: './image1/hyangwonjeong-pavilion-5900902__480.jpg', title: 'Hyangwonjeong pavilion', description: 'Hatszögletű pavilon egy híddal átkelve a lótusz tavon, Gyeongbokgung, Korea'},
    {photo: './image1/water-lily-1585159_640.jpg', title: 'Tavirózsa', description: 'A tavirózsa tápanyagban gazdag, iszapos talajú álló- vagy lassan folyó vizek lakója. Körülbelül 3 méter is lehet a vízmélység. A virágzási ideje június–szeptember között van.'},
    {photo: './image1/gyeongbok-palace-2929520_640.jpg', title: 'Kjongbokkung', description: 'A Kjongbokkung Szöul öt királyi palotájának egyike, mely 1395-re készült el. nevének jelentése „A mennyek által megáldott”.'},
    {photo: './image1/damyang-2237701_640.jpg', title: 'Gwangbangjerim erdő', description: 'Damyang megye Jeollanam-do megyében, Dél-Koreában. Séta a Metasequoia ösvényen '},
    {photo: './image1/korea-1740483_640.jpg', title: 'Gyeongbokgung palota őrei', description: 'Naponta kétszer bepillantást nyújt a múltba, amikor a Sumunjang vagy a királyi gárda őrizte a Gyeongbokgung palota bejáratát.'},
    {photo: './image1/tiger-3543416_640.jpg', title: 'Tigris és Sárkány', description: 'Legendák fesztiválja'},
    {photo: './image1/seoul-3664487_640.jpg', title: 'Szerelemlakatok', description: 'Egy 23 éves amerikai nő több mint tízezer kilométert repült Los Angelesből Szöulba, hogy szakítása után elvágja azt a szerelemlakatot, amit még volt barátjával helyezett el a dél-koreai fővárosban.'},
    {photo: './image1/korea-2836948_640.jpg', title: 'Han folyó', description: 'Korea. Szöul. Éjszakai neon város.'}
];



let loadPhoto = (photoNumber) => {
    const currImg = imagesData[photoNumber];
    $('#bigPic').attr('src', currImg.photo);
    $('#title').text(currImg.title);
    $('#desc').text(currImg.description);
    
};

loadPhoto(currentPhoto);

$('#rightBigArrow').click(() => {
    if (currentPhoto < (imagesData.length - 1) ){
        currentPhoto++;
    };
    loadPhoto(currentPhoto);
});

$('#leftBigArrow').click(() => {
    if (currentPhoto > 0){
        currentPhoto--;
    };
    loadPhoto(currentPhoto);
});



imagesData.forEach((item, index) => {
    $('#lower').append(`
    <div class = "box" data-index = "${index}" 
    style="background-image: url(${item.photo}); background-size: cover;">
    <div class = "title">${item.title}</div>
    </div>`)
   
    $('.box').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex;
        loadPhoto(currentPhoto);
        
    });
});