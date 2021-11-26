let randomImage = [];

randomImage[0] = "https://www.kenyans.co.ke/files/styles/article_style/public/images/media/Kenyans%20walking%20on%20Nairobi%20streets.jpg?itok=Yj6cG_Bo";
randomImage[1] = "https://images.theconversation.com/files/344284/original/file-20200626-104522-13rjrhp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
randomImage[2] = "https://thecityateyelevel.com/app/uploads/2018/06/p124-82-1_Mama-Ngina-Street-Nairobi-Kenya-Elijah-Agevi-Cecilia-Andersson-Laura-Petrella-1440x675.jpg";
randomImage[3] = "https://techmagazine.co.ke/wp-content/uploads/2020/08/kenyatta_avenue-1024x768-1.jpg";
randomImage[4] = "https://thecityateyelevel.com/app/uploads/2018/06/p125a-82-2_Mama-Ngina-Street-Nairobi-Kenya-Elijah-Agevi-Cecilia-Andersson-Laura-Petrella-1200x680.jpg";
randomImage[5] = "https://pbs.twimg.com/media/DyE2akXW0AAibsq.jpg";
randomImage[6] = "https://i.pinimg.com/originals/0d/00/72/0d00726ca8b54fa589545af9450a86f6.jpg";
randomImage[7] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiuBojDyX09iDm6pPQkQtZY9ZHaeS8SAPN0LSvNqe9wQkNZMAxj58syrvmcysGXPE94I&usqp=CAU";
randomImage[8] = "https://media-cdn.tripadvisor.com/media/photo-s/01/36/85/dd/nairobi-the-main-street.jpg";
randomImage[9] = "https://natekev.files.wordpress.com/2011/01/stanbic.jpg";
randomImage[10] = "https://live.staticflickr.com/4844/45243240925_b845d8b3e6_z.jpg";

// generate a number and provide to the image to generate a random image
function getRandomImage() {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomImage[randomNumber];
}

export { getRandomImage };