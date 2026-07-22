// Đảm bảo mảng masterQuizData luôn được khởi tạo
if (typeof masterQuizData === 'undefined') {
    var masterQuizData = [];
}

// NẠP DỮ LIỆU CÂU HỎI BÀI HỌC LESSON 1 VÀO MẢNG CHUNG
masterQuizData.push(
    // ================= SECTION 1.1: BẢNG CHỮ CÁI & ĐÁNH VẦN (SPELLING) =================
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên và chọn TÊN ĐÚNG NHẤT:",
        audioText: "Good morning! My name is Arthur, spelled A - R - T - H - U - R.",
        options: [
            { en: "A. ARTHUR", vi: "Arthur" },
            { en: "B. AUTHOR", vi: "Author" },
            { en: "C. ARCHER", vi: "Archer" },
            { en: "D. MARK", vi: "Mark" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên và chọn TÊN CHÍNH XÁC:",
        audioText: "My name is Harrison, spelled H - A - R - R - I - S - O - N.",
        options: [
            { en: "A. HARRISON", vi: "Harrison" },
            { en: "B. HARRIS", vi: "Harris" },
            { en: "C. HARISON", vi: "Harison" },
            { en: "D. HARRYS", vi: "Harrys" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie tự giới thiệu tên và ĐIỀN TÊN CƠ BẢN:",
        audioText: "Hello Sir, my name is Rose, R - O - S - E.",
        displaySentence: "Caddie's name is _______.",
        translation: "Tên của Caddie là _______.",
        targetWord: "rose",
        hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer báo thương hiệu gôn 'Titleist' và chọn ĐÁP ÁN:",
        audioText: "Titleist is spelled T - I - T - L - E - I - S - T.",
        options: [
            { en: "A. Titleist", vi: "Bóng/Gậy hãng Titleist" },
            { en: "B. Callaway", vi: "Bóng/Gậy hãng Callaway" },
            { en: "C. TaylorMade", vi: "Bóng/Gậy hãng TaylorMade" },
            { en: "D. Ping", vi: "Bóng/Gậy hãng Ping" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer báo hãng bóng Callaway và chọn ĐÁP ÁN:",
        audioText: "I am playing a Callaway ball, C - A - L - L - A - W - A - Y.",
        options: [
            { en: "A. Callaway", vi: "Bóng hãng Callaway" },
            { en: "B. Titleist", vi: "Bóng hãng Titleist" },
            { en: "C. Srixon", vi: "Bóng hãng Srixon" },
            { en: "D. Honma", vi: "Bóng hãng Honma" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe âm 'P' trong từ 'Putter' và chọn CÁCH PHÁT ÂM CHUẨN:",
        audioText: "Here is your putter, Sir.",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh ở âm /p/ đầu từ", vi: "Bật hơi mạnh không rung dây thanh quản" },
            { en: "B. Đọc rung dây thanh quản giống âm /b/", vi: "Đọc thành âm /b/ trong từ Butter" },
            { en: "C. Đọc thành âm /f/ nhẹ kéo dài", vi: "Đọc chệch sang âm /f/" },
            { en: "D. Bỏ qua âm đầu đọc là utter", vi: "Không phát âm âm đầu" }
        ],
        correct: 0
    },

    // ================= SECTION 1.2: SỐ ĐẾM & KHOẢNG CÁCH (NUMBERS & DISTANCE) =================
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Nghe Caddie báo khoảng cách tới Green và chọn KHOẢNG CÁCH:",
        audioText: "It is one hundred and fifty yards to the green, sir.",
        options: [
            { en: "A. 130 yards", vi: "130 yard" },
            { en: "B. 150 yards", vi: "150 yard" },
            { en: "C. 115 yards", vi: "115 yard" },
            { en: "D. 105 yards", vi: "105 yard" }
        ],
        correct: 1
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Nghe khoảng cách '115 yards', từ 'Fifteen' có trọng âm rơi vào đâu?",
        audioText: "It is one hundred and fifteen yards to the green.",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Giúp Golfer phân biệt với Fifty (50)" },
            { en: "B. Nhấn mạnh vào âm tiết thứ nhất (Fif-)", vi: "Đọc nhấn giọng đầu" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Không nhấn âm" },
            { en: "D. Nhấn âm vào từ yards phía sau", vi: "Nhấn vào đơn vị đo" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Nghe Caddie kiểm đếm số gậy tại Buggy Station và chọn SỐ LƯỢNG:",
        audioText: "You have fourteen golf clubs, sir! Please sign here.",
        options: [
            { en: "A. 14 golf clubs", vi: "14 cây gậy" },
            { en: "B. 40 golf clubs", vi: "40 cây gậy" },
            { en: "C. 4 golf clubs", vi: "4 cây gậy" },
            { en: "D. 15 golf clubs", vi: "15 cây gậy" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số đếm] Nghe khoảng cách ngắn tới cờ và ĐIỀN SỐ DẠNG CƠ BẢN:",
        audioText: "You have 100 yards left to the pin, sir.",
        displaySentence: "You have _______ yards left to the pin.",
        translation: "Anh còn _______ yard nữa là tới cờ.",
        targetWord: "100",
        hint: "💡 Gợi ý: Nhập số 100."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm & Điểm số] Nghe Golfer báo điểm số 80 và chọn PHẢN HỒI CỦA CADDIE:",
        audioText: "What is your score, sir? - Score 80.",
        options: [
            { en: "A. Great score, Sir!", vi: "Điểm số tuyệt vời quá anh ơi!" },
            { en: "B. Watch out for the bunker.", vi: "Anh chú ý bẫy cát nhé." },
            { en: "C. Please aim to the left.", vi: "Anh ngắm sang bên trái ạ." },
            { en: "D. Here is your 5-iron, Sir.", vi: "Đây là gậy sắt 5 của anh ạ." }
        ],
        correct: 0
    },

    // ================= SECTION 1.3: SỞ THÍCH & TRÒ CHUYỆN (HOBBIES & SMALL TALK) =================
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chào hỏi] Nghe Caddie chào khách lần đầu tại sân và chọn CÂU CHÀO CHUẨN:",
        audioText: "Good morning, Sir! Welcome to our golf club. I am your Caddie today.",
        options: [
            { en: "A. Good morning, Sir! Welcome to our golf club. I am your Caddie today.", vi: "Chào buổi sáng anh! Chào mừng anh tới sân gôn. Em là Caddie của anh hôm nay." },
            { en: "B. Hello Sir! Give me your bag now.", vi: "Chào anh! Đưa túi gậy đây cho tôi." },
            { en: "C. Hi! Are you ready to play now?", vi: "Chào! Anh sẵn sàng chơi chưa?" },
            { en: "D. Morning, let's go quickly!", vi: "Sáng tốt lành, đi nhanh lên nào!" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] Nghe Caddie hỏi lịch sự về lần đầu khách đến sân:",
        audioText: "Is this your first time playing at our course, Sir?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?" },
            { en: "B. Did you play here before or never?", vi: "Anh chơi ở đây bao giờ chưa hay chưa từng?" },
            { en: "C. Why do you come to our course today?", vi: "Tại sao hôm nay anh lại tới sân này?" },
            { en: "D. Have you seen this course in your life?", vi: "Anh đã thấy sân này bao giờ trong đời chưa?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chăm sóc khách] Nghe Caddie chủ động mời nước lạnh trời nắng:",
        audioText: "The sun is strong today, Sir. Would you like some cold water?",
        options: [
            { en: "A. The sun is strong today, Sir. Would you like some cold water?", vi: "Hôm nay nắng gắt quá anh ạ. Anh có muốn uống chút nước lạnh không ạ?" },
            { en: "B. Drink water now, it is hot.", vi: "Uống nước đi, trời nóng lắm." },
            { en: "C. Do you have water in your bag?", vi: "Trong túi anh có nước không?" },
            { en: "D. You look thirsty, buy water now.", vi: "Trông anh khát đấy, đi mua nước đi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "fill",
        title: "[1.3 Chăm sóc khách] Nghe Caddie hỏi dùng khăn lạnh và ĐIỀN TỪ DỄ:",
        audioText: "The weather is very hot. Would you like a wet towel, Sir?",
        displaySentence: "Would you like a wet _______, Sir?",
        translation: "Anh có muốn dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel",
        hint: "💡 Gợi ý: Từ có 5 ký tự chỉ chiếc khăn."
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Khích lệ] Nghe Caddie ngợi khen ngay sau cú đánh hay của Golfer:",
        audioText: "That is a great shot, Sir!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. You hit luckily, Sir!", vi: "Anh đánh may mắn thôi ạ!" },
            { en: "C. The ball went fine.", vi: "Bóng đi tạm ổn ạ." },
            { en: "D. Not bad for you.", vi: "Cũng không tệ lắm với anh." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Nghe Golfer chia sẻ về sở thích du lịch và chọn CÂU ĐÁP TƯƠNG TÁC:",
        audioText: "I really like travelling around the world on weekends. How about you?",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích đi du lịch ạ! Em còn thích nấu ăn nữa ạ." },
            { en: "B. I hate travelling, it costs money.", vi: "Em ghét du lịch lắm, tốn tiền." },
            { en: "C. I don't have free time like you.", vi: "Em làm gì có thời gian rảnh như anh." },
            { en: "D. I only like sleeping all day.", vi: "Em chỉ thích ngủ cả ngày thôi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chỉ hướng & Bẫy cát] Nghe Caddie chỉ hướng ngắm sang trái và cảnh báo bẫy cát:",
        audioText: "Please aim to the left, Sir. Watch out for the bunker on the right.",
        options: [
            { en: "A. Please aim to the left, Sir. Watch out for the bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, chú ý bẫy cát bên phải ạ." },
            { en: "B. Hit right into the sand bunker.", vi: "Đánh thẳng vào bẫy cát bên phải đi." },
            { en: "C. Left is bad, right is sand.", vi: "Trái là xấu, phải là cát." },
            { en: "D. Don't look left or right.", vi: "Đừng nhìn sang trái hay phải." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Đưa gậy] Nghe Caddie trao gậy sắt 5 cho khách và xác nhận:",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng cây gậy anh cần không ạ?" },
            { en: "B. Take this 5-iron now.", vi: "Cầm lấy gậy số 5 này đi." },
            { en: "C. Is 5-iron okay or not?", vi: "Gậy 5 được hay không được?" },
            { en: "D. 5-iron here, hit it quickly.", vi: "Gậy 5 đây, đánh nhanh lên." }
        ],
        correct: 0
    }
);
