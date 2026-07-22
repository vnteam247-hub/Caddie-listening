// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP ĐẦY ĐỦ 150 CÂU HỎI ĐỘC BẢN CHO LESSON 1 VÀO MẢNG CHUNG (MỖI SECTION 50 CÂU)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI & ĐÁNH VẦN (CÂU 1 - CÂU 50)
    // =========================================================================
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi Golfer đánh vần 'T-I-T-L-E-I-S-T', chữ cái 'I' phát âm IPA là gì?",
        audioText: "Titleist is spelled T - I - T - L - E - I - S - T.",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "D. /ɛ/", vi: "Phát âm /ɛ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Để không nhầm 'P' với 'B' khi đàm thoại, Caddie dùng từ NATO nào cho chữ P?",
        audioText: "P as in Papa, B as in Bravo.",
        options: [{ en: "A. Papa", vi: "Từ Papa (Chữ P)" }, { en: "B. Peter", vi: "Từ Peter" }, { en: "C. Paul", vi: "Từ Paul" }, { en: "D. Pink", vi: "Từ Pink" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'H' phát âm chuẩn IPA là gì?",
        audioText: "Hybrid starts with letter H.",
        options: [{ en: "A. /eɪtʃ/", vi: "Phát âm chuẩn /eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "Phát âm /heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "Phát âm /eɪdʒ/" }, { en: "D. /ætʃ/", vi: "Phát âm /ætʃ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Cặp chữ cái nào dễ gây nhầm lẫn nhất khi đàm thoại qua bộ đàm?",
        audioText: "B as in Bravo, P as in Papa.",
        options: [{ en: "A. B và P", vi: "Cặp chữ B và P" }, { en: "B. A và Z", vi: "Cặp chữ A và Z" }, { en: "C. K và L", vi: "Cặp chữ K và L" }, { en: "D. H và O", vi: "Cặp chữ H và O" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN ĐÚNG NHẤT:",
        audioText: "Good morning! My name is Arthur, spelled A - R - T - H - U - R.",
        options: [{ en: "A. ARTHUR", vi: "Tên Arthur" }, { en: "B. AUTHOR", vi: "Tên Author" }, { en: "C. ARCHER", vi: "Tên Archer" }, { en: "D. MARK", vi: "Tên Mark" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN CHÍNH XÁC:",
        audioText: "My name is Harrison, spelled H - A - R - R - I - S - O - N.",
        options: [{ en: "A. HARRISON", vi: "Tên Harrison" }, { en: "B. HARRIS", vi: "Tên Harris" }, { en: "C. HARISON", vi: "Tên Harison" }, { en: "D. HARRYS", vi: "Tên Harrys" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie tự giới thiệu tên và ĐIỀN TÊN CƠ BẢN:",
        audioText: "Hello Sir, my name is Rose, R - O - S - E.",
        displaySentence: "Caddie's name is _______.", translation: "Tên của Caddie là _______.",
        targetWord: "rose", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer báo hãng bóng và chọn ĐÁP ÁN:",
        audioText: "I am playing a Callaway ball, C - A - L - L - A - W - A - Y.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Âm /p/ trong từ 'Par' cần phát âm như thế nào để không bị nhầm với 'Bar'?",
        audioText: "You got a Par on this hole, sir.",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh", vi: "Mím môi bật hơi mạnh (vô thanh), tránh nhầm với Bar" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc rung dây thanh quản (giống âm /b/)" },
            { en: "C. Đọc thành âm /f/", vi: "Đọc kéo dài thành âm /f/" },
            { en: "D. Uốn lưỡi chạm vòm miệng", vi: "Uốn lưỡi chạm vòm miệng trên" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Khi đưa gậy gạt cho khách, Caddie phát âm từ 'Putter' như thế nào?",
        audioText: "Here is your putter, Sir.",
        options: [
            { en: "A. Bật hơi mạnh vô thanh ở âm /p/ đầu từ", vi: "Tránh nhầm với Butter" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc thành Butter" },
            { en: "C. Đọc thành âm /f/ nhẹ", vi: "Đọc thành Futter" },
            { en: "D. Bỏ qua âm đầu", vi: "Đọc là utter" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ '0' trong mã số booking thường được người nước ngoài đọc gọn là gì?",
        audioText: "Booking number G-8-0.",
        options: [{ en: "A. Oh /əʊ/", vi: "Đọc tắt là 'Oh'" }, { en: "B. Zero", vi: "Đọc là Zero" }, { en: "C. Null", vi: "Đọc là Null" }, { en: "D. Nil", vi: "Đọc là Nil" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Course' trong 'golf course' phát âm nguyên âm nào?",
        audioText: "Welcome to our golf course.",
        options: [{ en: "A. /ɔːr/ dài", vi: "Phát âm nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Phát âm nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Phát âm nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Phát âm nguyên âm /ɒ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Cụm từ 'Tee box' phát âm IPA chuẩn là gì?",
        audioText: "Welcome to Tee box hole 1.",
        options: [{ en: "A. /tiː bɑːks/", vi: "Phát âm chuẩn /tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "Phát âm /teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "Phát âm /tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "Phát âm /tiː bɔːks/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Wedge' (gậy kỹ thuật) có âm cuối là phụ âm gì?",
        audioText: "60 degree wedge.",
        options: [{ en: "A. /dʒ/", vi: "Bật phụ âm cuối /dʒ/" }, { en: "B. /ʒ/", vi: "Bật phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Bật phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Bật phụ âm /ɡ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Hybrid' (gậy lai) có âm tiết thứ nhất chứa nguyên âm đôi nào?",
        audioText: "Here is your Hybrid club.",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên thương hiệu gôn và chọn ĐÁP ÁN:",
        audioText: "My ball brand is Srixon, S - R - I - X - O - N.",
        options: [{ en: "A. Srixon", vi: "Bóng hãng Srixon" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. TaylorMade", vi: "Bóng hãng TaylorMade" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và ĐIỀN TÊN VÀO Ô TRỐNG:",
        audioText: "My name is Mike, spelled M - I - K - E.",
        displaySentence: "Golfer's name is _______.", translation: "Tên của Golfer là _______.",
        targetWord: "mike", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi nghe đánh vần 'M - A - R - K', chữ cái 'A' phát âm IPA là gì?",
        audioText: "Mark is spelled M - A - R - K.",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /ɑːr/", vi: "Phát âm /ɑːr/" }, { en: "C. /æ/", vi: "Phát âm /æ/" }, { en: "D. /e/", vi: "Phát âm /e/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên mã gậy gạt và ĐIỀN TỪ CƠ BẢN:",
        audioText: "My putter model is P - I - N - G.",
        displaySentence: "Putter brand is _______.", translation: "Hãng gậy gạt là _______.",
        targetWord: "ping", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'Z' theo giọng Anh-Mỹ thường phát âm IPA là gì?",
        audioText: "Letter Z in American English.",
        options: [{ en: "A. /ziː/", vi: "Đọc là Zee (/ziː/)" }, { en: "B. /zed/", vi: "Đọc là Zed (/zed/)" }, { en: "C. /zaɪ/", vi: "Đọc là Zai" }, { en: "D. /zoʊ/", vi: "Đọc là Zo" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'W' được đọc như thế nào trong bảng chữ cái?",
        audioText: "Wedge starts with Double U.",
        options: [{ en: "A. Double U /ˈdʌb.əl.juː/", vi: "Đọc là Double U" }, { en: "B. Triple U", vi: "Đọc là Triple U" }, { en: "C. Way", vi: "Đọc là Way" }, { en: "D. Ve", vi: "Đọc là Ve" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'R' trong tiếng Anh-Mỹ (US) có đặc điểm phát âm gì?",
        audioText: "Letter R in English.",
        options: [{ en: "A. Uốn cong đầu lưỡi về phía sau", vi: "Phát âm uốn lưỡi /ɑːr/" }, { en: "B. Rung đầu lưỡi mạnh", vi: "Rung đầu lưỡi giống tiếng Việt" }, { en: "C. Bật môi vô thanh", vi: "Bật môi không uốn lưỡi" }, { en: "D. Đọc giống chữ L", vi: "Đọc giống chữ L" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn TÊN ĐÚNG:",
        audioText: "I am David, D - A - V - I - D.",
        options: [{ en: "A. DAVID", vi: "Tên David" }, { en: "B. DAVIS", vi: "Tên Davis" }, { en: "C. DANIEL", vi: "Tên Daniel" }, { en: "D. DAVIN", vi: "Tên Davin" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'K' phát âm IPA là gì?",
        audioText: "Letter K sound.",
        options: [{ en: "A. /keɪ/", vi: "Phát âm /keɪ/" }, { en: "B. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "C. /kiː/", vi: "Phát âm /kiː/" }, { en: "D. /kɛ/", vi: "Phát âm /kɛ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe đánh vần tên thương hiệu và chọn ĐÁP ÁN:",
        audioText: "Honma club, H - O - N - M - A.",
        options: [{ en: "A. Honma", vi: "Gậy hãng Honma" }, { en: "B. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Majesty", vi: "Gậy hãng Majesty" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'E' trong bảng chữ cái tiếng Anh phát âm IPA chuẩn là gì?",
        audioText: "Letter E sound.",
        options: [{ en: "A. /iː/", vi: "Phát âm /iː/" }, { en: "B. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "C. /e/", vi: "Phát âm /e/" }, { en: "D. /aɪ/", vi: "Phát âm /aɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'J' phát âm IPA chuẩn là gì?",
        audioText: "Letter J sound.",
        options: [{ en: "A. /dʒeɪ/", vi: "Phát âm /dʒeɪ/" }, { en: "B. /ʒeɪ/", vi: "Phát âm /ʒeɪ/" }, { en: "C. /dʒaɪ/", vi: "Phát âm /dʒaɪ/" }, { en: "D. /jeɪ/", vi: "Phát âm /jeɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'G' trong tiếng Anh phát âm IPA như thế nào?",
        audioText: "Letter G as in Golf.",
        options: [{ en: "A. /dʒiː/ (kết thúc bằng âm iː dài)", vi: "Đọc là /dʒiː/" }, { en: "B. /dʒeɪ/", vi: "Đọc giống chữ J" }, { en: "C. /ɡiː/", vi: "Đọc là Gi" }, { en: "D. /dʒe/", vi: "Đọc là Ge" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "My name is John, J - O - H - N.",
        options: [{ en: "A. JOHN", vi: "Tên John" }, { en: "B. JACK", vi: "Tên Jack" }, { en: "C. JIM", vi: "Tên Jim" }, { en: "D. JOE", vi: "Tên Joe" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'Y' trong tiếng Anh phát âm IPA chuẩn là gì?",
        audioText: "Letter Y sound.",
        options: [{ en: "A. /waɪ/", vi: "Phát âm /waɪ/" }, { en: "B. /jaɪ/", vi: "Phát âm /jaɪ/" }, { en: "C. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "D. /yeɪ/", vi: "Phát âm /yeɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên hãng gậy và chọn ĐÁP ÁN:",
        audioText: "My driver is TaylorMade, T - A - Y - L - O - R - M - A - D - E.",
        options: [{ en: "A. TaylorMade", vi: "Gậy hãng TaylorMade" }, { en: "B. Titleist", vi: "Gậy hãng Titleist" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Ping", vi: "Gậy hãng Ping" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie đánh vần tên mình và ĐIỀN TÊN VÀO Ô TRỐNG:",
        audioText: "My name is Anna, A - N - N - A.",
        displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "anna", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "I am Alex, A - L - E - X.",
        options: [{ en: "A. ALEX", vi: "Tên Alex" }, { en: "B. ALAN", vi: "Tên Alan" }, { en: "C. ADAM", vi: "Tên Adam" }, { en: "D. ALEC", vi: "Tên Alec" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'X' phát âm IPA chuẩn là gì?",
        audioText: "Letter X sound.",
        options: [{ en: "A. /eks/", vi: "Phát âm /eks/" }, { en: "B. /egz/", vi: "Phát âm /egz/" }, { en: "C. /z/", vi: "Phát âm /z/" }, { en: "D. /s/", vi: "Phát âm /s/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên hãng bóng và chọn ĐÁP ÁN:",
        audioText: "I play Volvik ball, V - O - L - V - I - K.",
        options: [{ en: "A. Volvik", vi: "Bóng hãng Volvik" }, { en: "B. Vice", vi: "Bóng hãng Vice" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Bridgestone", vi: "Bóng hãng Bridgestone" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và ĐIỀN TÊN:",
        audioText: "Call me Paul, P - A - U - L.",
        displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "paul", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'U' trong bảng chữ cái phát âm IPA chuẩn là gì?",
        audioText: "Letter U sound.",
        options: [{ en: "A. /juː/", vi: "Phát âm /juː/" }, { en: "B. /uː/", vi: "Phát âm /uː/" }, { en: "C. /ʌ/", vi: "Phát âm /ʌ/" }, { en: "D. /aʊ/", vi: "Phát âm /aʊ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'Q' trong bảng chữ cái phát âm IPA chuẩn là gì?",
        audioText: "Letter Q sound.",
        options: [{ en: "A. /kjuː/", vi: "Phát âm /kjuː/" }, { en: "B. /kuː/", vi: "Phát âm /kuː/" }, { en: "C. /kwɑː/", vi: "Phát âm /kwɑː/" }, { en: "D. /kju/", vi: "Phát âm /kju/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "My name is Tom, T - O - M.",
        options: [{ en: "A. TOM", vi: "Tên Tom" }, { en: "B. TIM", vi: "Tên Tim" }, { en: "C. TED", vi: "Tên Ted" }, { en: "D. TODD", vi: "Tên Todd" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie tự giới thiệu tên và ĐIỀN TÊN:",
        audioText: "I am Mary, M - A - R - Y.",
        displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "mary", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'O' trong bảng chữ cái tiếng Anh phát âm IPA chuẩn là gì?",
        audioText: "Letter O sound.",
        options: [{ en: "A. /oʊ/", vi: "Phát âm /oʊ/" }, { en: "B. /ɒ/", vi: "Phát âm /ɒ/" }, { en: "C. /ɔː/", vi: "Phát âm /ɔː/" }, { en: "D. /uː/", vi: "Phát âm /uː/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'I' phát âm IPA chuẩn là gì?",
        audioText: "Iron starts with I.",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /ɪ/", vi: "Phát âm /ɪ/" }, { en: "D. /eɪ/", vi: "Phát âm /eɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên hãng gậy và chọn ĐÁP ÁN:",
        audioText: "I use Cobra iron, C - O - B - R - A.",
        options: [{ en: "A. Cobra", vi: "Gậy hãng Cobra" }, { en: "B. Cleveland", vi: "Gậy hãng Cleveland" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Honma", vi: "Gậy hãng Honma" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'V' phát âm IPA chuẩn là gì?",
        audioText: "Letter V sound.",
        options: [{ en: "A. /viː/", vi: "Phát âm /viː/" }, { en: "B. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "C. /vɑː/", vi: "Phát âm /vɑː/" }, { en: "D. /vɛ/", vi: "Phát âm /vɛ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và ĐIỀN TÊN:",
        audioText: "I am Mark, M - A - R - K.",
        displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "mark", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "My name is Eric, E - R - I - C.",
        options: [{ en: "A. ERIC", vi: "Tên Eric" }, { en: "B. EVAN", vi: "Tên Evan" }, { en: "C. EDEN", vi: "Tên Eden" }, { en: "D. EARL", vi: "Tên Earl" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'S' phát âm IPA chuẩn là gì?",
        audioText: "Letter S sound.",
        options: [{ en: "A. /es/", vi: "Phát âm /es/" }, { en: "B. /sɪ/", vi: "Phát âm /sɪ/" }, { en: "C. /ʃiː/", vi: "Phát âm /ʃiː/" }, { en: "D. /z/", vi: "Phát âm /z/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'L' phát âm IPA chuẩn là gì?",
        audioText: "Letter L sound.",
        options: [{ en: "A. /el/", vi: "Phát âm /el/" }, { en: "B. /laɪ/", vi: "Phát âm /laɪ/" }, { en: "C. /leɪ/", vi: "Phát âm /leɪ/" }, { en: "D. /luː/", vi: "Phát âm /luː/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe đánh vần tên thương hiệu và chọn ĐÁP ÁN:",
        audioText: "Mizuno club, M - I - Z - U - N - O.",
        options: [{ en: "A. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "B. Miura", vi: "Gậy hãng Miura" }, { en: "C. Maruman", vi: "Gậy hãng Maruman" }, { en: "D. Honma", vi: "Gậy hãng Honma" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'N' trong tiếng Anh phát âm phân biệt với 'M' như thế nào?",
        audioText: "Letter N sound.",
        options: [{ en: "A. /en/ (nguyên âm e ngắn kết thúc âm mũi n)", vi: "Phát âm /en/ (kết thúc âm mũi n)" }, { en: "B. /em/", vi: "Phát âm /em/ (mím môi)" }, { en: "C. /enː/", vi: "Phát âm kéo dài" }, { en: "D. /an/", vi: "Phát âm /an/" }],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.2: SỐ ĐẾM & KHOẢNG CÁCH (CÂU 51 - CÂU 100)
    // =========================================================================
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie cần nhấn trọng âm 'Fifteen' ở đâu để Golfer không nghe nhầm thành 'Fifty'?",
        audioText: "It is one hundred and fifteen yards to the green.",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Nhấn trọng âm vào âm tiết thứ hai (-teen)" },
            { en: "B. Nhấn mạnh vào âm tiết đầu (Fif-)", vi: "Nhấn mạnh vào âm tiết đầu (Fif-)" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Đọc lướt cả hai âm tiết giọng trầm" },
            { en: "D. Nhấn âm vào từ 'yards'", vi: "Nhấn âm vào đơn vị đo yards" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Khi báo khoảng cách 150 yards, cách đọc tiếng Anh tự nhiên nhất là gì?",
        audioText: "It is one hundred and fifty yards to the green.",
        options: [
            { en: "A. One hundred and fifty yards", vi: "Đọc là 150 yard (One hundred and fifty yards)" },
            { en: "B. Fifteen zero yards", vi: "Đọc là 15 0 yard" },
            { en: "C. One five zero yards", vi: "Đọc là 1 5 0 yard" },
            { en: "D. One hundred fifteen yards", vi: "Đọc là 115 yard" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie nghe Golfer nói cần gậy góc 60 độ. Số '60' có trọng âm rơi vào đâu?",
        audioText: "I need a 60 degree wedge.",
        options: [{ en: "A. Âm tiết đầu (Six-)", vi: "Nhấn âm đầu (SIX-ty)" }, { en: "B. Âm tiết cuối (-ty)", vi: "Nhấn âm cuối (Six-TY)" }, { en: "C. Cả hai âm bằng nhau", vi: "Cả hai âm bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm IPA chuẩn của số '3' trên sân gôn là gì?",
        audioText: "Three iron, sir.",
        options: [{ en: "A. /θriː/", vi: "Phát âm /θriː/" }, { en: "B. /triː/", vi: "Phát âm /triː/" }, { en: "C. /free/", vi: "Phát âm /free/" }, { en: "D. /driː/", vi: "Phát âm /driː/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Đâu là phiên âm IPA chuẩn của số '13'?",
        audioText: "Hole number 13.",
        options: [{ en: "A. /ˌθɜːrˈtiːn/", vi: "Phát âm /ˌθɜːrˈtiːn/" }, { en: "B. /ˈθɜːr.ti/", vi: "Phát âm /ˈθɜːr.ti/" }, { en: "C. /θriː.tiːn/", vi: "Phát âm /θriː.tiːn/" }, { en: "D. /θɜːr.ten/", vi: "Phát âm /θɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie kiểm đếm thấy túi có 14 cây gậy. Số '14' đọc là gì?",
        audioText: "You have fourteen golf clubs, sir!",
        options: [{ en: "A. Fourteen /ˌfɔːrˈtiːn/", vi: "Đọc là 14 (Fourteen)" }, { en: "B. Forty /ˈfɔːr.ti/", vi: "Đọc là 40 (Forty)" }, { en: "C. Four /fɔːr/", vi: "Đọc là 4 (Four)" }, { en: "D. Fourteenth /ˌfɔːrˈtiːnθ/", vi: "Đọc là Thứ 14 (Fourteenth)" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Hundred' trong cụm 'One hundred yards' phát âm IPA chuẩn là gì?",
        audioText: "One hundred yards.",
        options: [{ en: "A. /ˈhʌn.drəd/", vi: "Phát âm /ˈhʌn.drəd/" }, { en: "B. /ˈhʊn.dred/", vi: "Phát âm /ˈhʊn.dred/" }, { en: "C. /ˈhæn.drɪd/", vi: "Phát âm /ˈhæn.drɪd/" }, { en: "D. /ˈhɒn.drəd/", vi: "Phát âm /ˈhɒn.drəd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm chuẩn IPA của số '5' là gì?",
        audioText: "5-iron, sir.",
        options: [{ en: "A. /faɪv/", vi: "Phát âm /faɪv/" }, { en: "B. /fɪf/", vi: "Phát âm /fɪf/" }, { en: "C. /faɪf/", vi: "Phát âm /faɪf/" }, { en: "D. /faɪ/", vi: "Phát âm /faɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm chuẩn IPA của số '12' là gì?",
        audioText: "We have twelve buggy cars.",
        options: [{ en: "A. /twelv/", vi: "Phát âm /twelv/" }, { en: "B. /twelf/", vi: "Phát âm /twelf/" }, { en: "C. /twerv/", vi: "Phát âm /twerv/" }, { en: "D. /twelvθ/", vi: "Phát âm /twelvθ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '20' trong tiếng Anh chuẩn IPA phát âm là gì?",
        audioText: "Twenty yards to the fringe.",
        options: [{ en: "A. /ˈtwen.ti/", vi: "Phát âm /ˈtwen.ti/" }, { en: "B. /twenˈtiːn/", vi: "Phát âm /twenˈtiːn/" }, { en: "C. /ˈtwen.ty/", vi: "Phát âm /ˈtwen.ty/" }, { en: "D. /two.ty/", vi: "Phát âm /two.ty/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Thousand' (hàng ngàn) có phiên âm IPA chuẩn là gì?",
        audioText: "One thousand members.",
        options: [{ en: "A. /ˈθaʊ.zənd/", vi: "Phát âm /ˈθaʊ.zənd/" }, { en: "B. /ˈsaʊ.zənd/", vi: "Phát âm /ˈsaʊ.zənd/" }, { en: "C. /ˈtoʊ.zənd/", vi: "Phát âm /ˈtoʊ.zənd/" }, { en: "D. /ˈθoʊ.zænd/", vi: "Phát âm /ˈθoʊ.zænd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '40' được viết và phát âm IPA chuẩn như thế nào?",
        audioText: "Forty yards to the bunker.",
        options: [{ en: "A. Forty /ˈfɔːr.ti/", vi: "Viết là Forty (không u), phát âm /ˈfɔːr.ti/" }, { en: "B. Fourty /ˈfɔːr.tiːn/", vi: "Viết là Fourty, phát âm /ˈfɔːr.tiːn/" }, { en: "C. Forth /ˈfɔːrθ/", vi: "Viết là Forth" }, { en: "D. Four-ty /fɔːrˈti/", vi: "Viết là Four-ty" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie đọc số hố, số 9 phát âm IPA chuẩn là gì?",
        audioText: "Hole number 9.",
        options: [{ en: "A. /naɪn/", vi: "Phát âm /naɪn/" }, { en: "B. /nɪn/", vi: "Phát âm /nɪn/" }, { en: "C. /neɪn/", vi: "Phát âm /neɪn/" }, { en: "D. /naɪ/", vi: "Phát âm /naɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Eight' đồng âm với từ nào trong tiếng Anh?",
        audioText: "8-iron, sir.",
        options: [{ en: "A. Ate", vi: "Từ Ate (/eɪt/)" }, { en: "B. Eat", vi: "Từ Eat (/iːt/)" }, { en: "C. At", vi: "Từ At (/æt/)" }, { en: "D. Height", vi: "Từ Height (/haɪt/)" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '7' có phiên âm IPA chuẩn là gì?",
        audioText: "7-iron.",
        options: [{ en: "A. /ˈsev.ən/", vi: "Phát âm /ˈsev.ən/" }, { en: "B. /ˈseɪ.vən/", vi: "Phát âm /ˈseɪ.vən/" }, { en: "C. /ˈsev.en/", vi: "Phát âm /ˈsev.en/" }, { en: "D. /sɪv.ən/", vi: "Phát âm /sɪv.ən/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Four' (Số 4) có phát âm âm cuối chuẩn Anh-Mỹ là gì?",
        audioText: "Par 4 hole.",
        options: [{ en: "A. /fɔːr/", vi: "Phát âm /fɔːr/" }, { en: "B. /fɑːr/", vi: "Phát âm /fɑːr/" }, { en: "C. /fʊər/", vi: "Phát âm /fʊər/" }, { en: "D. /fəʊr/", vi: "Phát âm /fəʊr/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '6' có âm cuối là gì?",
        audioText: "6-iron.",
        options: [{ en: "A. /ks/", vi: "Kết thúc bằng cụm phụ âm /ks/" }, { en: "B. /s/", vi: "Kết thúc bằng âm /s/" }, { en: "C. /z/", vi: "Kết thúc bằng âm /z/" }, { en: "D. /ʃ/", vi: "Kết thúc bằng âm /ʃ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '30' phát âm chuẩn IPA như thế nào?",
        audioText: "Thirty yards short.",
        options: [{ en: "A. /ˈθɜːr.ti/", vi: "Phát âm /ˈθɜːr.ti/" }, { en: "B. /ˌθɜːrˈtiːn/", vi: "Phát âm /ˌθɜːrˈtiːn/" }, { en: "C. /ˈtriː.ti/", vi: "Phát âm /ˈtriː.ti/" }, { en: "D. /ˈθɜːr.ten/", vi: "Phát âm /ˈθɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '50' có trọng âm rơi vào đâu?",
        audioText: "Fifty yards to the pin.",
        options: [{ en: "A. Âm tiết đầu (Fif-)", vi: "Nhấn âm đầu (FIF-ty)" }, { en: "B. Âm tiết cuối (-ty)", vi: "Nhấn âm cuối (Fif-TY)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Trong tiếng Anh, từ 'One' (Số 1) phát âm IPA chuẩn là gì?",
        audioText: "Hole 1.",
        options: [{ en: "A. /wʌn/", vi: "Phát âm /wʌn/" }, { en: "B. /oʊn/", vi: "Phát âm /oʊn/" }, { en: "C. /wɒn/", vi: "Phát âm /wɒn/" }, { en: "D. /vʌn/", vi: "Phát âm /vʌn/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '2' có nguyên âm kéo dài là gì trong IPA?",
        audioText: "2 shots.",
        options: [{ en: "A. /tuː/", vi: "Phát âm nguyên âm /tuː/" }, { en: "B. /tʊ/", vi: "Phát âm nguyên âm /tʊ/" }, { en: "C. /toʊ/", vi: "Phát âm nguyên âm /toʊ/" }, { en: "D. /tʌ/", vi: "Phát âm nguyên âm /tʌ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '10' có nguyên âm ngắn nào?",
        audioText: "Ten yards.",
        options: [{ en: "A. /e/", vi: "Chứa nguyên âm ngắn /e/" }, { en: "B. /æ/", vi: "Chứa nguyên âm /æ/" }, { en: "C. /ɪ/", vi: "Chứa nguyên âm /ɪ/" }, { en: "D. /ʌ/", vi: "Chứa nguyên âm /ʌ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '11' có trọng âm đặt ở âm tiết nào?",
        audioText: "11th hole.",
        options: [{ en: "A. Âm tiết 2 (-lev-)", vi: "Nhấn âm thứ hai (e-LEV-en)" }, { en: "B. Âm tiết 1 (E-)", vi: "Nhấn âm thứ nhất (E-lev-en)" }, { en: "C. Âm tiết 3 (-en)", vi: "Nhấn âm thứ ba (e-lev-EN)" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số thứ tự '3rd' (dùng cho hố số 3) phát âm IPA là gì?",
        audioText: "3rd hole.",
        options: [{ en: "A. /θɜːrd/", vi: "Phát âm /θɜːrd/" }, { en: "B. /θriːθ/", vi: "Phát âm /θriːθ/" }, { en: "C. /θɜːrt/", vi: "Phát âm /θɜːrt/" }, { en: "D. /triːd/", vi: "Phát âm /triːd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số đếm] Nghe thông báo khoảng cách và ĐIỀN SỐ DẠNG CƠ BẢN:",
        audioText: "The distance to the green is 150 yards.",
        displaySentence: "The distance to the green is _______ yards.", translation: "Khoảng cách đến green là _______ yard.",
        targetWord: "150", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số đếm] Nghe khoảng cách ngắn tới cờ và ĐIỀN SỐ CƠ BẢN:",
        audioText: "You have 100 yards left to the pin, sir.",
        displaySentence: "You have _______ yards left to the pin.", translation: "Anh còn _______ yard nữa là tới cờ.",
        targetWord: "100", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Đâu là cách phát âm chuẩn IPA của từ 'Iron' (gậy sắt)?",
        audioText: "7-iron, sir.",
        options: [{ en: "A. /ˈaɪ.ən/", vi: "Phát âm chuẩn /ˈaɪ.ən/" }, { en: "B. /ˈaɪ.rən/", vi: "Phát âm /ˈaɪ.rən/" }, { en: "C. /ˈiː.rɒn/", vi: "Phát âm /ˈiː.rɒn/" }, { en: "D. /ˈaɪ.roʊn/", vi: "Phát âm /ˈaɪ.roʊn/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Thiết bị] Máy đo khoảng cách bằng laser của Caddie phát âm IPA là gì?",
        audioText: "Let me check with my rangefinder.",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Máy đo khoảng cách Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm đo khoảng cách" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm & Gậy] Khi kiểm gậy thấy thiếu gậy trong túi khách, Caddie báo khách thế nào?",
        audioText: "Excuse me Sir, there are only 13 clubs in your bag. Please check.",
        options: [
            { en: "A. Excuse me Sir, there are only 13 clubs in your bag. Please check.", vi: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em." },
            { en: "B. You lost one club already!", vi: "Anh làm mất 1 gậy rồi đấy!" },
            { en: "C. Where is your club? You forgot it.", vi: "Gậy đâu rồi? Anh quên à." },
            { en: "D. Bad bag, only 13 clubs.", vi: "Túi chán thế có 13 gậy." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Từ 'Distance' (khoảng cách) có trọng âm rơi vào âm tiết nào?",
        audioText: "Checking the distance.",
        options: [{ en: "A. Âm tiết 1 (Dis-)", vi: "Nhấn âm thứ nhất (DIS-tance)" }, { en: "B. Âm tiết 2 (-tance)", vi: "Nhấn âm thứ hai (Dis-TANCE)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Nghe Caddie báo khoảng cách tới cờ và chọn ĐÁP ÁN:",
        audioText: "It is one hundred and eighty yards to the pin, sir.",
        options: [{ en: "A. 180 yards", vi: "Khoảng cách 180 yard" }, { en: "B. 108 yards", vi: "Khoảng cách 108 yard" }, { en: "C. 80 yards", vi: "Khoảng cách 80 yard" }, { en: "D. 118 yards", vi: "Khoảng cách 118 yard" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số đếm] Nghe Caddie báo số hố gôn và ĐIỀN SỐ CƠ BẢN:",
        audioText: "This is hole number 5, sir.",
        displaySentence: "This is hole number _______.", translation: "Đây là hố số _______.",
        targetWord: "5", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '16' phát âm IPA chuẩn là gì?",
        audioText: "Hole 16, sir.",
        options: [{ en: "A. /ˌsɪkˈstiːn/", vi: "Phát âm /ˌsɪkˈstiːn/" }, { en: "B. /ˈsɪk.sti/", vi: "Phát âm /ˈsɪk.sti/" }, { en: "C. /sɪks.ten/", vi: "Phát âm Siksten" }, { en: "D. /sɪks.tiːnθ/", vi: "Phát âm Sixteenth" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Caddie báo khoảng cách còn lại, số '70' phát âm chuẩn là gì?",
        audioText: "You have seventy yards left.",
        options: [{ en: "A. /ˈsev.ən.ti/", vi: "Phát âm /ˈsev.ən.ti/" }, { en: "B. /ˌsev.ənˈtiːn/", vi: "Phát âm /ˌsev.ənˈtiːn/" }, { en: "C. /seven.tiːn/", vi: "Phát âm Seventeen" }, { en: "D. /sev.ti/", vi: "Phát âm Sevti" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số đếm] Nghe Golfer hỏi số gậy par của hố và ĐIỀN SỐ:",
        audioText: "This is a Par 4 hole, sir.",
        displaySentence: "This is a Par _______ hole.", translation: "Đây là hố Par _______.",
        targetWord: "4", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Số '80' có trọng âm đặt ở đâu?",
        audioText: "Eighty yards to the green.",
        options: [{ en: "A. Âm tiết 1 (Eigh-)", vi: "Nhấn âm thứ nhất (EIGH-ty)" }, { en: "B. Âm tiết 2 (-ty)", vi: "Nhấn âm thứ hai (Eigh-TY)" }, { en: "C. Bằng nhau", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Nghe Caddie báo khoảng cách và chọn ĐÁP ÁN:",
        audioText: "It is two hundred yards from the tee, sir.",
        options: [{ en: "A. 200 yards", vi: "Khoảng cách 200 yard" }, { en: "B. 120 yards", vi: "Khoảng cách 120 yard" }, { en: "C. 20 yards", vi: "Khoảng cách 20 yard" }, { en: "D. 220 yards", vi: "Khoảng cách 220 yard" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số gậy] Nghe Caddie lấy gậy sắt cho khách và ĐIỀN SỐ GẬY:",
        audioText: "Here is your 8 iron, sir.",
        displaySentence: "Here is your _______ iron, sir.", translation: "Đây là gậy sắt số _______ của anh.",
        targetWord: "8", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '17' có trọng âm chính đặt ở đâu?",
        audioText: "Seventeen yards short.",
        options: [{ en: "A. Âm tiết 3 (-teen)", vi: "Nhấn âm thứ ba (Seven-TEEN)" }, { en: "B. Âm tiết 1 (Sev-)", vi: "Nhấn âm thứ nhất (SEVen-teen)" }, { en: "C. Âm tiết 2 (-en-)", vi: "Nhấn âm thứ hai (sev-EN-teen)" }, { en: "D. Không trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '90' phát âm IPA chuẩn là gì?",
        audioText: "Ninety yards to the flag.",
        options: [{ en: "A. /ˈnaɪn.ti/", vi: "Phát âm /ˈnaɪn.ti/" }, { en: "B. /ˌnaɪnˈtiːn/", vi: "Phát âm /ˌnaɪnˈtiːn/" }, { en: "C. /nin.ti/", vi: "Phát âm Ninti" }, { en: "D. /naɪn.ten/", vi: "Phát âm Nineten" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Nghe Caddie báo khoảng cách tới cờ và chọn câu viết đúng:",
        audioText: "It is 125 yards to the pin.",
        options: [
            { en: "A. One hundred and twenty-five yards", vi: "Đọc đầy đủ là 125 yard" },
            { en: "B. Twelve five yards", vi: "Đọc tắt là Twelve five yards" },
            { en: "C. One twenty yards", vi: "Đọc sai là 120 yard" },
            { en: "D. Two hundred yards", vi: "Đọc sai là 200 yard" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số gậy] Nghe Caddie kiểm đếm số cú đánh (shots) và ĐIỀN SỐ:",
        audioText: "That was 2 shots, sir.",
        displaySentence: "That was _______ shots, sir.", translation: "Đó là _______ cú đánh ạ.",
        targetWord: "2", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '18' có phiên âm IPA chuẩn là gì?",
        audioText: "Hole 18 is Par 5.",
        options: [{ en: "A. /ˌeɪˈtiːn/", vi: "Phát âm /ˌeɪˈtiːn/" }, { en: "B. /ˈeɪ.ti/", vi: "Phát âm /ˈeɪ.ti/" }, { en: "C. /eɪt.ten/", vi: "Phát âm Eitten" }, { en: "D. /eɪ.tiːnθ/", vi: "Phát âm Eighteenth" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '19' có phiên âm IPA chuẩn là gì?",
        audioText: "Nineteen yards left.",
        options: [{ en: "A. /ˌnaɪnˈtiːn/", vi: "Phát âm /ˌnaɪnˈtiːn/" }, { en: "B. /ˈnaɪn.ti/", vi: "Phát âm /ˈnaɪn.ti/" }, { en: "C. /nin.tiːn/", vi: "Phát âm Nintien" }, { en: "D. /naɪn.ten/", vi: "Phát âm Nineten" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Caddie đo khoảng cách bằng thước yards, từ 'Yard' phát âm IPA chuẩn là gì?",
        audioText: "Distance in yards.",
        options: [{ en: "A. /jɑːrd/", vi: "Phát âm /jɑːrd/" }, { en: "B. /jærd/", vi: "Phát âm /jærd/" }, { en: "C. /jɔːrd/", vi: "Phát âm /jɔːrd/" }, { en: "D. /jʊərd/", vi: "Phát âm /jʊərd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "fill",
        title: "[1.2 Số gậy] Nghe Caddie đưa gậy gỗ và ĐIỀN SỐ GẬY:",
        audioText: "Here is your 3 wood, sir.",
        displaySentence: "Here is your _______ wood, sir.", translation: "Đây là gậy gỗ số _______ của anh.",
        targetWord: "3", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Khoảng cách] Nghe Caddie báo khoảng cách và chọn ĐÁP ÁN:",
        audioText: "160 yards to the green.",
        options: [{ en: "A. 160 yards", vi: "Khoảng cách 160 yard" }, { en: "B. 116 yards", vi: "Khoảng cách 116 yard" }, { en: "C. 60 yards", vi: "Khoảng cách 60 yard" }, { en: "D. 610 yards", vi: "Khoảng cách 610 yard" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Cách đọc thứ tự hố số 1 ('1st hole') bằng tiếng Anh là gì?",
        audioText: "1st hole.",
        options: [{ en: "A. First hole /fɜːrst həʊl/", vi: "Đọc là Hố thứ nhất (First hole)" }, { en: "B. One hole", vi: "Đọc là Hố một" }, { en: "C. Single hole", vi: "Đọc là Hố đơn" }, { en: "D. Initial hole", vi: "Đọc là Hố đầu" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Cách đọc thứ tự hố số 2 ('2nd hole') bằng tiếng Anh là gì?",
        audioText: "2nd hole.",
        options: [{ en: "A. Second hole /ˈsek.ənd həʊl/", vi: "Đọc là Hố thứ hai (Second hole)" }, { en: "B. Two hole", vi: "Đọc là Hố hai" }, { en: "C. Double hole", vi: "Đọc là Hố kép" }, { en: "D. Twice hole", vi: "Đọc là Hố gấp đôi" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Cách đọc điểm số tổng 72 bằng tiếng Anh chuẩn là gì?",
        audioText: "Score is 72.",
        options: [{ en: "A. Seventy-two", vi: "Đọc là Seventy-two (72)" }, { en: "B. Seven two", vi: "Đọc rời Seven two" }, { en: "C. Seventeen two", vi: "Đọc nhầm Seventeen two" }, { en: "D. Seventy second", vi: "Đọc sai thứ tự Seventy second" }],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.3: LỜI CHÀO, CHĂM SÓC & TRÒ CHUYỆN SỞ THÍCH (CÂU 101 - CÂU 150)
    // =========================================================================
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chào hỏi] Khi gặp Golfer lần đầu tại Tee box hố 1, câu chào nào thể hiện sự chuyên nghiệp nhất?",
        audioText: "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.",
        options: [
            { en: "A. Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.", vi: "Chào buổi sáng anh! Chào mừng anh tới sân gôn. Em là Caddie của anh hôm nay. Em ở đây để hỗ trợ anh ạ." },
            { en: "B. Hello Sir! Give me your bag now.", vi: "Chào anh! Đưa túi gậy đây." },
            { en: "C. Hi! Are you ready to play now?", vi: "Chào! Sẵn sàng chơi chưa?" },
            { en: "D. Morning, let's go quickly!", vi: "Chào buổi sáng, đi nhanh lên!" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] Để hỏi lịch sự xem đây có phải lần đầu Golfer chơi ở sân mình không:",
        audioText: "Is this your first time playing at our course, Sir?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?" },
            { en: "B. Did you play here before or never?", vi: "Anh chơi ở đây bao giờ chưa hay chưa từng?" },
            { en: "C. Have you ever seen this course in your life?", vi: "Anh đã từng thấy sân này bao giờ chưa?" },
            { en: "D. Why do you come to our course today?", vi: "Tại sao hôm nay anh lại đến sân này?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chăm sóc] Khi thời tiết nắng nóng, Caddie chủ động mời khách uống nước lạnh bằng câu nào?",
        audioText: "The sun is strong today, Sir. Would you like some cold water?",
        options: [
            { en: "A. The sun is strong today, Sir. Would you like some cold water?", vi: "Trời nắng gắt quá anh ạ. Anh có muốn uống chút nước lạnh không ạ?" },
            { en: "B. Drink water now, it is hot.", vi: "Uống nước đi, nóng lắm." },
            { en: "C. Do you have water in your bag?", vi: "Trong túi có nước không?" },
            { en: "D. You look thirsty, go buy water.", vi: "Trông khát đấy, đi mua nước đi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "fill",
        title: "[1.3 Chăm sóc] Nghe Caddie hỏi dùng khăn lạnh và ĐIỀN TỪ DỄ:",
        audioText: "The weather is very hot. Would you like a wet towel, Sir?",
        displaySentence: "Would you like a wet _______, Sir?", translation: "Anh có muốn dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ chiếc khăn."
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Khích lệ] Khi Golfer thực hiện cú đánh đẹp mắt, Caddie ngợi khen ngay lập tức bằng câu nào?",
        audioText: "That is a great shot, Sir!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. You hit luckily, Sir!", vi: "Anh đánh may mắn thôi ạ!" },
            { en: "C. The ball went fine.", vi: "Bóng đi tạm ổn." },
            { en: "D. Not bad for you.", vi: "Cũng không tệ lắm với anh." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] Hỏi về mục đích chơi gôn: 'Anh chơi gôn để thư giãn hay công việc?', câu tiếng Anh là gì?",
        audioText: "Do you play golf to relax or for business, Sir?",
        options: [
            { en: "A. Do you play golf to relax or for business, Sir?", vi: "Anh chơi gôn để thư giãn hay cho công việc ạ?" },
            { en: "B. Why do you play golf here?", vi: "Tại sao anh chơi gôn ở đây?" },
            { en: "C. Is golf your work or fun?", vi: "Golf là công việc hay cuộc vui?" },
            { en: "D. Do you make money from golf?", vi: "Anh có kiếm tiền từ golf không?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây có phiên âm IPA chuẩn là gì?",
        audioText: "Jogging in the morning.",
        options: [{ en: "A. Jogging /ˈdʒɑː.ɡɪŋ/", vi: "Sở thích Chạy bộ thể dục" }, { en: "B. Running", vi: "Chạy nhanh" }, { en: "C. Walking", vi: "Đi bộ" }, { en: "D. Jog", vi: "Chạy nhẹ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây có phiên âm IPA chuẩn là gì?",
        audioText: "Travelling around the world.",
        options: [{ en: "A. Travelling /ˈtræv.əl.ɪŋ/", vi: "Sở thích Đi du lịch" }, { en: "B. Shopping", vi: "Mua sắm" }, { en: "C. Cooking", vi: "Nấu ăn" }, { en: "D. Sleeping", vi: "Ngủ nghỉ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Khi hỏi về sở thích lúc rảnh rỗi của Golfer một cách lịch sự, Caddie dùng câu nào?",
        audioText: "What are your hobbies in your free time, Sir?",
        options: [
            { en: "A. What are your hobbies in your free time, Sir?", vi: "Sở thích lúc rảnh rỗi của anh là gì ạ?" },
            { en: "B. What do you do when you are lazy?", vi: "Anh làm gì khi lười biếng?" },
            { en: "C. Why don't you work at weekend?", vi: "Sao cuối tuần anh không làm việc?" },
            { en: "D. Tell me your secret hobbies.", vi: "Kể em nghe sở thích bí mật đi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Golfer nói về sở thích thích đi du lịch, Caddie đáp lại lịch sự thế nào?",
        audioText: "I like travelling too, Sir! I also like cooking.",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa." },
            { en: "B. I hate travelling, it costs money.", vi: "Em ghét du lịch, tốn tiền." },
            { en: "C. I don't have free time like you.", vi: "Em không có thời gian rảnh như anh." },
            { en: "D. I only like staying at home.", vi: "Em chỉ thích ở nhà thôi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây phát âm IPA chuẩn là gì?",
        audioText: "Watching TV.",
        options: [{ en: "A. Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", vi: "Sở thích Xem TV" }, { en: "B. Looking TV", vi: "Nhìn TV" }, { en: "C. Seeing TV", vi: "Thấy TV" }, { en: "D. Listen TV", vi: "Nghe TV" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây phát âm IPA chuẩn là gì?",
        audioText: "Shopping on weekends.",
        options: [{ en: "A. Shopping /ˈʃɑː.pɪŋ/", vi: "Sở thích Mua sắm" }, { en: "B. Buying", vi: "Mua hàng" }, { en: "C. Selling", vi: "Bán hàng" }, { en: "D. Market", vi: "Đi chợ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây có phiên âm IPA chuẩn là gì?",
        audioText: "Cooking for my family.",
        options: [{ en: "A. Cooking /ˈkʊk.ɪŋ/", vi: "Sở thích Nấu ăn" }, { en: "B. Cooked", vi: "Đã nấu" }, { en: "C. Kitchen", vi: "Nhà bếp" }, { en: "D. Chef", vi: "Đầu bếp" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Hỏi Golfer thích đi du lịch hay xem TV hơn, câu hỏi tiếng Anh đúng là gì?",
        audioText: "Do you like travelling or watching TV, Sir?",
        options: [
            { en: "A. Do you like travelling or watching TV, Sir?", vi: "Anh thích đi du lịch hay xem TV hơn ạ?" },
            { en: "B. Are you travelling and watching TV standard?", vi: "Anh du lịch và xem TV đúng chuẩn chứ?" },
            { en: "C. Why you travel or watch TV?", vi: "Tại sao du lịch hay xem TV?" },
            { en: "D. You choose travel or TV now?", vi: "Chọn du lịch hay TV ngay?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Kỹ năng] Yếu tố phi ngôn ngữ quan trọng nhất khi chào hỏi tạo ấn tượng ban đầu là gì?",
        audioText: "Maintaining eye contact and smiling.",
        options: [
            { en: "A. Giữ giao tiếp bằng mắt và nụ cười thân thiện", vi: "Giao tiếp mắt & nụ cười thân thiện (Eye contact & smiling)" },
            { en: "B. Đứng quay lưng lại phía khách", vi: "Đứng quay lưng lại phía khách" },
            { en: "C. Nhìn xuống đất đọc kịch bản", vi: "Nhìn xuống đất đọc kịch bản" },
            { en: "D. Nói thật nhanh không ngắt nghỉ", vi: "Nói quá nhanh không ngắt nghỉ" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chăm sóc] Thấy khách bị đổ nhiều mồ hôi do nắng nóng, Caddie chủ động đề nghị gì thêm?",
        audioText: "Do you need more sunscreen, Sir?",
        options: [
            { en: "A. Do you need more sunscreen, Sir?", vi: "Anh có cần thêm kem chống nắng không ạ?" },
            { en: "B. Do you want to buy a new hat?", vi: "Anh có muốn mua mũ mới không?" },
            { en: "C. Should I call an ambulance?", vi: "Em có nên gọi cấp cứu không?" },
            { en: "D. Please go under the tree and stay there.", vi: "Trú dưới cây và ở yên đó." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] 'Golf có phải môn thể thao yêu thích của anh không?', câu hỏi tiếng Anh là gì?",
        audioText: "Is golf your favorite sport, Sir?",
        options: [
            { en: "A. Is golf your favorite sport, Sir?", vi: "Golf có phải môn thể thao yêu thích của anh không ạ?" },
            { en: "B. Do you play golf best in the world?", vi: "Anh chơi golf giỏi nhất thế giới phải không?" },
            { en: "C. Why golf is favorite for you?", vi: "Tại sao golf lại được yêu thích?" },
            { en: "D. Is golf the only sport you know?", vi: "Golf là môn duy nhất anh biết à?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Xưng hô] Cách xưng hô tôn trọng nhất dành cho khách nam và khách nữ trên sân gôn là gì?",
        audioText: "Yes, Sir. Thank you, Ma'am.",
        options: [{ en: "A. Sir / Ma'am", vi: "Cách xưng hô Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Cách xưng hô Mister / Missis" }, { en: "C. Mister / Lady", vi: "Cách xưng hô Mister / Lady" }, { en: "D. Bro / Sister", vi: "Cách xưng hô Bro / Sister" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Cảm ơn] Khi Golfer khen 'You did a great job today!', Caddie đáp lại thế nào?",
        audioText: "It was my pleasure serving you today, Sir!",
        options: [
            { en: "A. It was my pleasure serving you today, Sir!", vi: "Rất hân hạnh được phục vụ anh hôm nay ạ!" },
            { en: "B. I know I am very good.", vi: "Em biết em giỏi mà." },
            { en: "C. Give me more tip then.", vi: "Thế thì cho em thêm tiền tip đi." },
            { en: "D. You are welcome, bye.", vi: "Không có gì, tạm biệt." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ 'Relax' trong câu 'play golf to relax' có trọng âm rơi vào đâu?",
        audioText: "Play golf to relax.",
        options: [{ en: "A. Âm tiết thứ 2 (-lax)", vi: "Nhấn âm thứ hai (re-LAX)" }, { en: "B. Âm tiết thứ 1 (Re-)", vi: "Nhấn âm thứ nhất (RE-lax)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chào hỏi] Khi khách hỏi 'How are you today?', Caddie trả lời chuyên nghiệp nhất là gì?",
        audioText: "I am very well, thank you, Sir! How are you today?",
        options: [
            { en: "A. I am very well, thank you, Sir! How are you today?", vi: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?" },
            { en: "B. I am tired because I walk a lot.", vi: "Em mệt vì đi bộ nhiều." },
            { en: "C. Normal, nothing special.", vi: "Bình thường, chẳng có gì đặc biệt." },
            { en: "D. So so, ready to go home.", vi: "Tàm tạm, sẵn sàng về nhà." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phát âm] Từ 'Business' trong cụm 'play golf for business' phát âm bao nhiêu âm tiết?",
        audioText: "Play golf for business.",
        options: [{ en: "A. 2 âm tiết (/ˈbɪz.nɪs/)", vi: "Đọc 2 âm tiết (/ˈbɪz.nɪs/)" }, { en: "B. 3 âm tiết (/ˈbɪ.zɪ.nəs/)", vi: "Đọc 3 âm tiết" }, { en: "C. 4 âm tiết", vi: "Đọc 4 âm tiết" }, { en: "D. 1 âm tiết", vi: "Đọc 1 âm tiết" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Hướng dẫn] Khi khách chuẩn bị di chuyển bằng xe Buggy, Caddie nhắc lịch sự thế nào?",
        audioText: "Please get on the buggy, Sir.",
        options: [
            { en: "A. Please get on the buggy, Sir.", vi: "Mời anh lên xe điện ạ." },
            { en: "B. Sit down buggy now.", vi: "Ngồi xuống xe ngay." },
            { en: "C. Jump in car quickly.", vi: "Nhảy vào xe nhanh lên." },
            { en: "D. Drive buggy yourself, Sir.", vi: "Tự lái xe đi anh." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Tạm biệt] Khi kết thúc vòng chơi, Caddie gửi lời chào tạm biệt lịch sự như thế nào?",
        audioText: "Thank you very much, Sir! Have a great day and hope to see you again!",
        options: [
            { en: "A. Thank you very much, Sir! Have a great day and hope to see you again!", vi: "Cảm ơn anh rất nhiều ạ! Chúc anh một ngày tuyệt vời và hẹn gặp lại anh!" },
            { en: "B. Bye bye, give me money.", vi: "Tạm biệt, đưa tiền đây." },
            { en: "C. Finished, go home now.", vi: "Xong rồi, về nhà đi." },
            { en: "D. See you never.", vi: "Không bao giờ gặp lại." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Động viên] Khi khách đánh hỏng một cú đánh, Caddie động viên bằng câu nào?",
        audioText: "Don't worry, Sir! We can recover on the next shot.",
        options: [
            { en: "A. Don't worry, Sir! We can recover on the next shot.", vi: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ." },
            { en: "B. That was a terrible shot!", vi: "Cú đánh tệ quá!" },
            { en: "C. You lost this game.", vi: "Anh thua trận này rồi." },
            { en: "D. Why did you hit like that?", vi: "Sao anh lại đánh như thế?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Đưa gậy] Khi trao gậy sắt cho Golfer, Caddie xác nhận lịch sự bằng câu nói nào?",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng cây gậy anh cần không ạ?" },
            { en: "B. Take this 5-iron now.", vi: "Cầm lấy gậy số 5 này đi." },
            { en: "C. Is 5-iron okay or not?", vi: "Gậy 5 được hay không?" },
            { en: "D. 5-iron here, hit it.", vi: "Gậy 5 đây, đánh đi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chỉ hướng] Khuyên Golfer ngắm sang bên trái vì bên phải có bẫy cát, câu chỉ hướng đúng là gì?",
        audioText: "Please aim to the left, Sir. There is a bunker on the right.",
        options: [
            { en: "A. Please aim to the left, Sir. There is a bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát bên phải ạ." },
            { en: "B. Hit right into the sand bunker.", vi: "Đánh thẳng vào bẫy cát bên phải." },
            { en: "C. Left is bad, right is sand.", vi: "Trái là xấu, phải là cát." },
            { en: "D. Don't look left or right.", vi: "Đừng nhìn sang trái hay phải." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Cảnh báo] Cảnh báo nhanh Golfer chú ý bẫy cát trước cú đánh, Caddie dùng câu ngắn nào?",
        audioText: "Watch out for the bunker, Sir.",
        options: [
            { en: "A. Watch out for the bunker, Sir.", vi: "Anh chú ý bẫy cát nhé ạ." },
            { en: "B. Look at the sand, Sir.", vi: "Nhìn vào cát đi." },
            { en: "C. Bunker is coming to you.", vi: "Bẫy cát đang đến kìa." },
            { en: "D. Danger sand here.", vi: "Cát nguy hiểm ở đây." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Tư vấn] Câu hỏi tư vấn gậy của Caddie có nghĩa tiếng Việt là gì?",
        audioText: "Which club do you prefer, Sir?",
        options: [
            { en: "A. Anh chọn/muốn cây gậy nào ạ?", vi: "Hỏi nhu cầu gậy: Anh chọn/muốn cây gậy nào ạ?" },
            { en: "B. Gậy này của ai ạ?", vi: "Gậy này của ai ạ?" },
            { en: "C. Anh có thích túi gậy này không?", vi: "Anh có thích túi gậy này không?" },
            { en: "D. Gậy này bao nhiêu tiền ạ?", vi: "Gậy này bao nhiêu tiền ạ?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Bàn giao] Khi bàn giao túi gậy đã làm sạch hoàn tất cuối buổi chơi, Caddie nói câu nào?",
        audioText: "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!",
        options: [
            { en: "A. Here is your golf bag, Sir. All clubs are clean and verified. Thank you!", vi: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch và xác minh đủ. Cảm ơn anh!" },
            { en: "B. Take your bag and go.", vi: "Cầm lấy túi rồi đi đi." },
            { en: "C. Finished bag, goodbye.", vi: "Túi xong rồi, tạm biệt." },
            { en: "D. Your bag is heavy, pay tip now.", vi: "Túi nặng quá, đưa tip đi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Golfer nói về lý do chơi gôn giao lưu kết nối đối tác, câu nói đó là gì?",
        audioText: "I play golf for networking.",
        options: [
            { en: "A. Tôi chơi golf để giao lưu kết nối đối tác", vi: "Mục đích: Tôi chơi golf để giao lưu kết nối đối tác" },
            { en: "B. Tôi chơi golf để tập thể dục", vi: "Tôi chơi golf để tập thể dục" },
            { en: "C. Tôi chơi golf vì bạn bè rủ", vi: "Tôi chơi golf vì bạn bè rủ" },
            { en: "D. Tôi chơi golf để thi đấu chuyên nghiệp", vi: "Tôi chơi golf để thi đấu chuyên nghiệp" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] Khi Golfer nói thích chơi tennis bên cạnh chơi golf, Caddie đáp lại như thế nào?",
        audioText: "Besides golf, I love playing tennis.",
        options: [
            { en: "A. Oh tennis too? You must be very active, Sir!", vi: "Ồ cả tennis nữa ạ? Anh chắc hẳn rất năng động ạ!" },
            { en: "B. Tennis is boring.", vi: "Tennis chán lắm." },
            { en: "C. Don't play tennis, play golf only.", vi: "Đừng chơi tennis, chỉ chơi golf thôi." },
            { en: "D. I don't know tennis.", vi: "Em không biết tennis." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chăm sóc] Mẫu câu chủ động hỏi Golfer có cần ô che nắng/mưa không là gì?",
        audioText: "Would you like an umbrella, Sir?",
        options: [
            { en: "A. Would you like an umbrella, Sir?", vi: "Anh có muốn dùng ô che không ạ?" },
            { en: "B. Take umbrella yourself.", vi: "Tự lấy ô đi." },
            { en: "C. Do you buy an umbrella?", vi: "Anh có mua ô không?" },
            { en: "D. Umbrella is heavy.", vi: "Ô nặng lắm." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "fill",
        title: "[1.3 Chăm sóc] Nghe Caddie hỏi khách dùng nước lạnh và ĐIỀN TỪ:",
        audioText: "Would you like some cold water, Sir?",
        displaySentence: "Would you like some cold _______, Sir?", translation: "Anh có muốn dùng chút _______ lạnh không ạ?",
        targetWord: "water", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ nước."
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Trò chuyện] Mẫu câu Caddie khen thời tiết đẹp để mở đầu câu chuyện là gì?",
        audioText: "Beautiful day, isn't it, Sir?",
        options: [
            { en: "A. Beautiful day, isn't it, Sir?", vi: "Một ngày thời tiết tuyệt vời phải không anh?" },
            { en: "B. Weather is terrible today.", vi: "Thời tiết hôm nay tệ quá." },
            { en: "C. Why are you playing today?", vi: "Sao hôm nay anh lại chơi?" },
            { en: "D. Rain is coming soon.", vi: "Trời sắp mưa rồi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phản xạ] Khi Golfer nói đến sân vì công việc, Caddie phản hồi thế nào?",
        audioText: "I am here for business.",
        options: [
            { en: "A. I see! Do you often play golf to network, Sir?", vi: "Em hiểu rồi ạ! Anh có thường chơi golf để kết nối đối tác không ạ?" },
            { en: "B. Business is boring.", vi: "Kinh doanh chán lắm." },
            { en: "C. Don't talk about business here.", vi: "Đừng bàn công việc ở đây." },
            { en: "D. You are very rich.", vi: "Anh giàu quá." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây có phiên âm IPA chuẩn là gì?",
        audioText: "Swimming in summer.",
        options: [{ en: "A. Swimming /ˈswɪm.ɪŋ/", vi: "Sở thích Bơi lội" }, { en: "B. Diving", vi: "Lặn" }, { en: "C. Running", vi: "Chạy" }, { en: "D. Walking", vi: "Đi bộ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sau đây có phiên âm IPA chuẩn là gì?",
        audioText: "Reading books.",
        options: [{ en: "A. Reading /ˈriː.dɪŋ/", vi: "Sở thích Đọc sách" }, { en: "B. Writing", vi: "Viết sách" }, { en: "C. Listening", vi: "Lắng nghe" }, { en: "D. Speaking", vi: "Nói chuyện" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Khích lệ] Khi Golfer ghi được birdie, Caddie chúc mừng hào hứng thế nào?",
        audioText: "Congratulations on your birdie, Sir!",
        options: [
            { en: "A. Congratulations on your birdie, Sir!", vi: "Chúc mừng anh đã đạt điểm Birdie ạ!" },
            { en: "B. Birdie is easy.", vi: "Birdie dễ mà." },
            { en: "C. Lucky shot only.", vi: "Đánh may thôi." },
            { en: "D. You can do better next time.", vi: "Lần sau anh làm tốt hơn." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Cảnh báo] Khi nhắc Golfer cẩn thận bẫy nước, Caddie nói câu nào?",
        audioText: "Please be careful, there is water behind the green, Sir.",
        options: [
            { en: "A. Please be careful, there is water behind the green, Sir.", vi: "Anh cẩn thận giúp em, có nước ở phía sau green ạ." },
            { en: "B. Hit straight into the water.", vi: "Đánh thẳng xuống nước đi." },
            { en: "C. Water is clean and safe.", vi: "Nước sạch và an toàn." },
            { en: "D. Don't worry about water.", vi: "Đừng lo về nước." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phục vụ] Khi lau sạch bóng gạt trên Green cho Golfer, Caddie trả lại bóng và nói câu nào?",
        audioText: "Your ball is clean now, Sir. Good luck with your putt!",
        options: [
            { en: "A. Your ball is clean now, Sir. Good luck with your putt!", vi: "Bóng của anh đã được lau sạch rồi ạ. Chúc anh gạt bóng may mắn ạ!" },
            { en: "B. Take your dirty ball.", vi: "Cầm lấy bóng bẩn này." },
            { en: "C. Clean ball yourself next time.", vi: "Lần sau tự lau bóng." },
            { en: "D. Ball is too old.", vi: "Bóng cũ quá." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "fill",
        title: "[1.3 Chăm sóc] Nghe Caddie chúc Golfer chơi may mắn và ĐIỀN TỪ DỄ:",
        audioText: "Good luck with your shot, Sir!",
        displaySentence: "Good _______ with your shot, Sir!", translation: "Chúc anh _______ mắn với cú đánh ạ!",
        targetWord: "luck", hint: "💡 Gợi ý: Từ gồm 4 ký tự chỉ sự may mắn."
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ 'Music' trong cụm từ nghe nhạc có phát âm IPA chuẩn là gì?",
        audioText: "Listening to music.",
        options: [{ en: "A. /ˈmjuː.zɪk/", vi: "Phát âm /ˈmjuː.zɪk/" }, { en: "B. /ˈmuː.zɪk/", vi: "Phát âm /ˈmuː.zɪk/" }, { en: "C. /ˈmjuː.sɪk/", vi: "Phát âm /ˈmjuː.sɪk/" }, { en: "D. /muː.sɪk/", vi: "Phát âm /muː.sɪk/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chỉ hướng] Khi hướng dẫn ngắm đánh thẳng phía trước, Caddie nói câu nào?",
        audioText: "Please hit straight ahead, Sir.",
        options: [
            { en: "A. Please hit straight ahead, Sir.", vi: "Anh đánh thẳng phía trước giúp em nhé ạ." },
            { en: "B. Aim left side only.", vi: "Ngắm bên trái thôi." },
            { en: "C. Aim right side only.", vi: "Ngắm bên phải thôi." },
            { en: "D. Hit backward, Sir.", vi: "Đánh ngược về sau." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 An toàn] Khi thấy có bão/sấm sét tiến gần, Caddie mời Golfer về nhà câu lạc bộ thế nào?",
        audioText: "The storm is coming near. Let's go back to the clubhouse, Sir.",
        options: [
            { en: "A. The storm is coming near. Let's go back to the clubhouse, Sir.", vi: "Cơn bão đang đến gần rồi ạ. Chúng ta nên quay về nhà câu lạc bộ cho an toàn thưa anh." },
            { en: "B. Keep playing in the rain.", vi: "Cứ tiếp tục chơi trong mưa." },
            { en: "C. Sit under the tall tree.", vi: "Ngồi dưới cây to." },
            { en: "D. Lightning is not dangerous.", vi: "Sấm sét không nguy hiểm." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Cụm từ sau đây có nghĩa tiếng Việt là gì?",
        audioText: "I play golf with my family.",
        options: [
            { en: "A. Tôi chơi golf cùng với gia đình", vi: "Ý nghĩa: Tôi chơi golf cùng với gia đình" },
            { en: "B. Tôi chơi golf một mình", vi: "Tôi chơi golf một mình" },
            { en: "C. Tôi chơi golf với đồng nghiệp", vi: "Tôi chơi golf với đồng nghiệp" },
            { en: "D. Tôi chơi golf với Caddie", vi: "Tôi chơi golf với Caddie" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phản xạ] Khi Golfer đánh bóng vào cỏ rough sâu, Caddie trấn an khách thế nào?",
        audioText: "Don't worry, Sir. I will find your ball.",
        options: [
            { en: "A. Don't worry, Sir. I will find your ball.", vi: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh ngay." },
            { en: "B. Ball is lost, buy new ball.", vi: "Mất bóng rồi, mua bóng mới đi." },
            { en: "C. Find it yourself, Sir.", vi: "Tự đi mà tìm." },
            { en: "D. You hit very bad.", vi: "Anh đánh tệ quá." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Động viên] Mẫu câu khuyên Golfer bình tĩnh tập trung trước cú gạt quan trọng là gì?",
        audioText: "Take your time, Sir.",
        options: [
            { en: "A. Take your time, Sir.", vi: "Anh cứ từ tốn bình tĩnh thôi ạ." },
            { en: "B. Hit quickly and go.", vi: "Đánh nhanh lên rồi đi." },
            { en: "C. Hurry up, we are slow.", vi: "Nhanh lên, chúng ta chậm rồi." },
            { en: "D. Don't think too much.", vi: "Đừng suy nghĩ." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chăm sóc] Khi Golfer bị mệt do đi bộ, Caddie đề nghị hỗ trợ gì?",
        audioText: "Would you like to sit and rest for a moment, Sir?",
        options: [
            { en: "A. Would you like to sit and rest for a moment, Sir?", vi: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?" },
            { en: "B. Keep running, Sir.", vi: "Tiếp tục chạy đi anh." },
            { en: "C. You are too weak.", vi: "Anh yếu quá." },
            { en: "D. Walk faster, Sir.", vi: "Đi nhanh lên anh." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Tạm biệt] Lời chúc Golfer có một trận đấu hay trước khi bắt đầu vòng chơi là gì?",
        audioText: "Have a great game today, Sir!",
        options: [
            { en: "A. Have a great game today, Sir!", vi: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!" },
            { en: "B. You will lose today.", vi: "Hôm nay anh sẽ thua." },
            { en: "C. Pay money now.", vi: "Trả tiền ngay." },
            { en: "D. Bye bye, Sir.", vi: "Tạm biệt anh." }
        ],
        correct: 0
    }
);
