var typeOfQuestions = new Array();
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

questions[0] = "She __ rice and meat";
typeOfQuestions[0] = "Chọn từ thích hợp điền vào chỗ trống";
choices[0] = new Array();
choices[0][0] = "drink";
choices[0][1] = "drinks";
choices[0][2] = "eat";
choices[0][3] = "eats";
answers[0] = choices[0][3];

questions[1] = "Meat"
typeOfQuestions[1] = "Chọn nghĩa của từ";
choices[1] = new Array();
choices[1][0] = "Cơm";
choices[1][1] = "Cam";
choices[1][2] = "Thịt";
choices[1][3] = "Trứng";
answers[1] = choices[1][2];

questions[2] = "http://i.imgur.com/UKBy5GZ.jpg";
typeOfQuestions[2] = "Chọn từ miêu tả hình ảnh";
choices[2] = new Array();
choices[2][0] = "noodle";
choices[2][1] = "beef";
choices[2][2] = "meat";
choices[2][3] = "egg";
answers[2] = choices[2][0];

//=====================================================================================================================

var voca = new Array(); // bo tu vung
var image = new Array(); // bo hinh anh
var pronounce = new Array();// bo phat am + nghia
var example = new Array(); // bo vi du
var trans = new Array();


voca[0] = new Array();
image[0] = new Array(); // hinh anh
pronounce[0] = new Array();// phat am + nghia
example[0] = new Array(); // vi du
trans[0] = new Array();	// dich vi du

voca[1] = new Array();
image[1] = new Array(); // hinh anh
pronounce[1] = new Array();// phat am + nghia
example[1] = new Array(); // vi du
trans[1] = new Array();	// dich vi du


voca[2] = new Array();
voca[2] = new Array();
image[2] = new Array(); // hinh anh
pronounce[2] = new Array();// phat am + nghia
example[2] = new Array(); // vi du
trans[2] = new Array();	// dich vi du

voca[3] = new Array();
voca[3] = new Array();
image[3] = new Array(); // hinh anh
pronounce[3] = new Array();// phat am + nghia
example[3] = new Array(); // vi du
trans[3] = new Array();	// dich vi du

voca[4] = new Array();
voca[5] = new Array();
voca[6] = new Array();
voca[7] = new Array();
voca[8] = new Array();

//--------------------------------
voca[0][0] = "Noodle";
image[0][0] = "http://i.imgur.com/UKBy5GZ.jpg";
pronounce[0][0] =  '[nu:dl] | (noun) <br> (số nhiều) mì sợi' ;
example[0][0] = new Array();
trans[0][0] = new Array();
example[0][0][0] = "1. Instant noodles.";
trans[0][0][0] = "mì ăn liền.";
example[0][0][1] = "2. We will eat beef noodle soup tomrrow.";
trans[0][0][1] = "Ngày mai chúng ta sẽ ăn phở bò.";
example[0][0][2] = "3. Chinese food is often served with rice or noodles.";
trans[0][0][2] = "Món ăn Trung Quốc thường có cơm hoặc mì sợi.";

voca[0][1] = "Milk";
image[0][1] = "http://i.imgur.com/6XRl3WW.jpg";
pronounce[0][1] =  '[milk] | (noun) | [uncountable] <br> Sữa' ;
example[0][1] = new Array();
trans[0][1] = new Array();
example[0][1][0] = "1. condensed milk";
trans[0][1][0] = "sữa đặc.";
example[0][1][1] = "2. Every morning, I drink a glass of milk.";
trans[0][1][1] = "Mỗi sáng, Tôi đều uống một cốc sữa.";
example[0][1][2] = "3. This bottle has a lot of milk.";
trans[0][1][2] = "Cái chai này có nhiều sữa.";

voca[0][2] = "Cake";
image[0][2] = "http://i.imgur.com/xae0cFX.jpg";
pronounce[0][2] =  '[keik] | (noun) <br> bánh';
example[0][2] = new Array();
trans[0][2] = new Array();
example[0][2][0] = "1. chocolate cake.";
trans[0][2][0] = " bánh socola.";
example[0][2][1] = "2. Cake of soap.";
trans[0][2][1] = "bánh xà phòng.";
example[0][2][2] = "3. Tom has many cakes in his handbag.";
trans[0][2][2] = "Tom có nhiều bánh kẹo trong túi của anh ấy.";
//----------------------------------------------------

voca[1][0] = "Dog";
image[1][0] = "http://www.furrytips.com/wp-content/uploads/2016/07/japanese-spitz.jpg";
pronounce[1][0] =  '[dɔg] | (noun) <br> Con chó, chó săn' ;
example[1][0] = new Array();
trans[1][0] = new Array();
example[1][0][0] = "1. This dog is cute!";
trans[1][0][0] = "Con chó này thật đáng yêu!";
example[1][0][1] = "2. It is my dog.";
trans[1][0][1] = "Đó là con chó của tôi.";
example[1][0][2] = "3*. Love you, love your dog.";
trans[1][0][2] = "Yêu nhau yêu cả đường đi ^-^.";

voca[1][1] = "Cat";
image[1][1] = "http://dreamicus.com/data/cat/cat-01.jpg";
pronounce[1][1] =  '[kæt] | (noun) <br> Con mèo' ;
example[1][1] = new Array();
trans[1][1] = new Array();
example[1][1][0] = "1. My cat has blue eyes.";
trans[1][1][0] = "Con mèo có đôi mắt xanh.";
example[1][	1][1] = "2.The cat likes playing with ball.";
trans[1][1][1] = "Con mèo thích chơi với quả bóng";
example[1][1][2] = "3. The cat sleeping in the chair is mine.";
trans[1][1][2] = "Con mèo nằm trên ghế là của tôi.";

voca[1][2] = "Chicken";
image[1][2] = "http://kingofwallpapers.com/chicken/chicken-006.jpg";
pronounce[1][2] =  "['t∫ikin] | (noun) <br> Con gà, thịt gà" ;
example[1][2] = new Array();
trans[1][2] = new Array();
example[1][2][0] = "1. The chicken can't fly.";
trans[1][2][0] = "Gà không thể bay.";
example[1][2][1] = "2. There are three chickens in the hencoop.";
trans[1][2][1] = "Có ba con gà trong chuồng.";
example[1][2][2] = "3. The food of chicken is rice.";
trans[1][2][2] = "Thức ăn của gà là thóc.";

//---------------------------------------------------------------

voca[2][0] = "Sea";
image[2][0] = "http://megatourdv.ru/upload/medialibrary/8a1/%D0%BF%D0%BB%D1%8F%D1%87%D0%B6.jpg";
pronounce[2][0] =  "[si:] | (noun) <br> ( số nhiều) biển" ;
example[2][0] = new Array();
trans[2][0] = new Array();
example[2][0][0] = "1. light sea";
trans[2][0][0] = " biển lặng.";
example[2][0][1] = "2. heavy sea.";
trans[2][0][1] = " biển động.";
example[2][0][2] = "3. I will go to sea next month.";
trans[2][0][2] = " Tôi sẽ đi biển vào tháng tới.";

voca[2][1] = "Snow";
image[2][1] = "http://www.baldhiker.com/wp-content/uploads/Sarah-Rees-snow-forest.jpg";
pronounce[2][1] =  '[snou] | (noun)/(veb) <br> tuyết rơi; đống tuyết' ;
example[2][1] = new Array();
trans[2][1] = new Array();
example[2][1][0] = "1. It snowed all day.";
trans[2][1][0] = " tuyết rơi xuống cả ngày.";
example[2][1][1] = "2. The years have snowed his hair.";
trans[2][1][1] = " Năm tháng đã làm cho tóc ông ta bạc trắng như tuyết";
example[2][1][2] = "3. to be snowed up (in ).";
trans[2][1][2] = " nghẽn lại vì tuyết (đường sá...).";

voca[2][2] = "Sky";
image[2][2] = "http://kingofwallpapers.com/sky/sky-012.jpg";
pronounce[2][2] =  "[skai] | (noun) <br>  (số nhiều) trời, bầu trời" ;
example[2][2] = new Array();
trans[2][2] = new Array();
example[2][2][0] = "1. under the open sky.";
trans[2][2][0] = " ngoài trời.";
example[2][2][1] = "2. praise somebody /something to the skies.";
trans[2][2][1] = " tán dương lên tận mây xanh.";
example[2][2][2] = "3*. the sky's the limit.";
trans[2][2][2] = " không có giới hạn.";
//---------------------------------------------------------------

voca[3][0] = "Teach";
image[3][0] = "https://thoughtcatalog.files.wordpress.com/2013/10/shutterstock_113056390.jpg?w=584&h=389";
pronounce[3][0] =  '[ti:t∫] | (veb) <br> dạy học; dạy bảo' ;
example[3][0] = new Array();
trans[3][0] = new Array();
example[3][0][0] = "1. She teaches English to advanced students.";
trans[3][0][0] = " Bà ấy dạy tiếng Anh cho sinh viên các lớp cao học.";
example[3][0][1] = "2. My parents teach me never to tell lies.";
trans[3][0][1] = " Bố mẹ tôi dạy tôi không bao giờ được nói dối.";
example[3][0][2] = "3*. You can't teach an old dog new tricks.";
trans[3][0][2] = " (tục ngữ) tre già khó uốn.";

voca[3][1] = "Learn";
image[3][1] = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDe60sMl4w-fAklYFZAmqk4CsLPd4TClxdKXPmBII4Ap19QRe8";
pronounce[3][1] =  '[lə:nt] | (veb) <br> học, nghiên cứu' ;
example[3][1] = new Array();
trans[3][1] = new Array();
example[3][1][0] = "1. She wants to learn a foreign language.";
trans[3][1][0] = " Cô ấy muốn học một ngoại ngữ.";
example[3][1][1] = "2. Children should endeavour to learn assiduously.";
trans[3][1][1] = "Trẻ con cần phải cố gắng học hành chăm chỉ";
example[3][1][2] = "3. I try to  learn by heart all of them.";
trans[3][1][2] = " Tôi cố gắng học thuộc lòng tất cả chúng.";

voca[3][2] = "Uniform";
image[3][2] = "http://static1.dienanh.net/upload/2016/06/22/16544340_1200x1000_0.jpg";
pronounce[3][2] =  "['ju:nifɔ:m] | (noun) <br> đồng phục" ;
example[3][2] = new Array();
trans[3][2] = new Array();
example[3][2][0] = "1. Children wear school uniform.";
trans[3][2][0] = " Trẻ em mặc đồng phục của nhà trường.";
example[3][2][1] = "2. Officers dressed in full uniform.";
trans[3][2][1] = " Các sĩ quan đã mặc quân phục đầy đủ.";
example[3][2][2] = "3. Uniform of my school is dress.";
trans[3][2][2] = " Đồng phục của trường tôi là váy.";
