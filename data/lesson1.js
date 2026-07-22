// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP ĐẦY ĐỦ 90 CÂU HỎI CỦA LESSON 1 VÀO MẢNG CHUNG
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI, PHÁT ÂM & ĐÁNH VẦN (CÂU 1 - CÂU 15)
    // =========================================================================
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi Golfer đánh vần 'T-I-T-L-E-I-S-T', chữ cái 'I' phát âm IPA là gì?",
        audioText: "Titleist is spelled T - I - T - L - E - I - S - T.",
        options: [{ en: "A. /aɪ/", vi: "/aɪ/" }, { en: "B. /iː/", vi: "/iː/" }, { en: "C. /eɪ/", vi: "/eɪ/" }, { en: "D. /ɛ/", vi: "/ɛ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Để không nhầm 'P' với 'B' khi nghe 'Peter', Caddie dùng từ NATO nào cho chữ P?",
        audioText: "P as in Papa, B as in Bravo.",
        options: [{ en: "A. Papa", vi: "Papa" }, { en: "B. Peter", vi: "Peter" }, { en: "C. Paul", vi: "Paul" }, { en: "D. Pink", vi: "Pink" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'H' trong tên loại gậy Hybrid phát âm chuẩn IPA là gì?",
        audioText: "Hybrid starts with letter H.",
        options: [{ en: "A. /eɪtʃ/", vi: "/eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "/heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "/eɪdʒ/" }, { en: "D. /ætʃ/", vi: "/ætʃ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Cặp chữ cái nào dễ gây nhầm lẫn nhất khi đàm thoại qua bộ đàm?",
        audioText: "B as in Bravo, P as in Papa.",
        options: [{ en: "A. B và P", vi: "B và P" }, { en: "B. A và Z", vi: "A và Z" }, { en: "C. K và L", vi: "K và L" }, { en: "D. H và O", vi: "H và O" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN ĐÚNG NHẤT:",
        audioText: "Good morning! My name is Arthur, spelled A - R - T - H - U - R.",
        options: [{ en: "A. ARTHUR", vi: "Arthur" }, { en: "B. AUTHOR", vi: "Author" }, { en: "C. ARCHER", vi: "Archer" }, { en: "D. MARK", vi: "Mark" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN CHÍNH XÁC:",
        audioText: "My name is Harrison, spelled H - A - R - R - I - S - O - N.",
        options: [{ en: "A. HARRISON", vi: "Harrison" }, { en: "B. HARRIS", vi: "Harris" }, { en: "C. HARISON", vi: "Harison" }, { en: "D. HARRYS", vi: "Harrys" }],
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
        title: "[1.1 Bảng chữ cái] Nghe Golfer báo hãng bóng Callaway và chọn ĐÁP ÁN:",
        audioText: "I am playing a Callaway ball, C - A - L - L - A - W - A - Y.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Âm /p/ trong từ 'Par' cần phát âm như thế nào để không bị nhầm với 'Bar'?",
        audioText: "You got a Par on this hole, sir.",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh", vi: "Không rung thanh quản" },
            { en: "B. Đọc rung dây thanh quản", vi: "Giống âm /b/" },
            { en: "C. Đọc thành âm /f/", vi: "Kéo dài" },
            { en: "D. Uốn lưỡi chạm vòm miệng", vi: "Chạm vòm miệng trên" }
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
        options: [{ en: "A. Oh /əʊ/", vi: "Đọc là Oh" }, { en: "B. Zero", vi: "Zero" }, { en: "C. Null", vi: "Null" }, { en: "D. Nil", vi: "Nil" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Course' trong 'golf course' phát âm nguyên âm nào?",
        audioText: "Welcome to our golf course.",
        options: [{ en: "A. /ɔːr/ dài", vi: "Nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Nguyên âm /ɒ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Cụm từ 'Tee box' phát âm IPA chuẩn là gì?",
        audioText: "Welcome to Tee box hole 1.",
        options: [{ en: "A. /tiː bɑːks/", vi: "/tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "/teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "/tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "/tiː bɔːks/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Wedge' (gậy kỹ thuật) có âm cuối là phụ âm gì?",
        audioText: "60 degree wedge.",
        options: [{ en: "A. /dʒ/", vi: "Phụ âm /dʒ/" }, { en: "B. /ʒ/", vi: "Phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Phụ âm /ɡ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Hybrid' (gậy lai) có âm tiết thứ nhất chứa nguyên âm đôi nào?",
        audioText: "Here is your Hybrid club.",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.2: SỐ ĐẾM & KHOẢNG CÁCH (CÂU 16 - CÂU 50)
    // =========================================================================
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie cần nhấn trọng âm 'Fifteen' ở đâu để Golfer không nghe nhầm thành 'Fifty'?",
        audioText: "It is one hundred and fifteen yards to the green.",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Giúp phân biệt với Fifty (50)" },
            { en: "B. Nhấn mạnh vào âm tiết đầu (Fif-)", vi: "Nhấn âm đầu" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Giọng trầm" },
            { en: "D. Nhấn âm vào từ 'yards'", vi: "Nhấn đơn vị đo" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Khi báo khoảng cách '150 yards', cách đọc tiếng Anh tự nhiên nhất là gì?",
        audioText: "It is one hundred and fifty yards to the green.",
        options: [
            { en: "A. One hundred and fifty yards", vi: "150 yard" },
            { en: "B. Fifteen zero yards", vi: "15 0 yard" },
            { en: "C. One five zero yards", vi: "1 5 0 yard" },
            { en: "D. One hundred fifteen yards", vi: "115 yard" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie nghe Golfer nói: 'I need a 60-degree wedge'. Số '60' (Sixty) có trọng âm rơi vào đâu?",
        audioText: "I need a 60 degree wedge.",
        options: [{ en: "A. Âm tiết đầu (Six-)", vi: "Six-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Six-TY" }, { en: "C. Cả hai âm bằng nhau", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm IPA chuẩn của số '3' (Three) trên sân gôn là gì?",
        audioText: "Three iron, sir.",
        options: [{ en: "A. /θriː/", vi: "/θriː/" }, { en: "B. /triː/", vi: "/triː/" }, { en: "C. /free/", vi: "/free/" }, { en: "D. /driː/", vi: "/driː/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Đâu là phiên âm IPA chuẩn của số '13' (Thirteen)?",
        audioText: "Hole number 13.",
        options: [{ en: "A. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "B. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "C. /θriː.tiːn/", vi: "/θriː.tiːn/" }, { en: "D. /θɜːr.ten/", vi: "/θɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie kiểm đếm gậy tại Buggy Station: 'You have 14 golf clubs, sir'. Số '14' đọc là gì?",
        audioText: "You have fourteen golf clubs, sir!",
        options: [{ en: "A. Fourteen /ˌfɔːrˈtiːn/", vi: "14 cây gậy" }, { en: "B. Forty /ˈfɔːr.ti/", vi: "40 cây gậy" }, { en: "C. Four /fɔːr/", vi: "4 cây gậy" }, { en: "D. Fourteenth /ˌfɔːrˈtiːnθ/", vi: "Thứ 14" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Hundred' trong cụm 'One hundred yards' phát âm IPA chuẩn là gì?",
        audioText: "One hundred yards.",
        options: [{ en: "A. /ˈhʌn.drəd/", vi: "/ˈhʌn.drəd/" }, { en: "B. /ˈhʊn.dred/", vi: "/ˈhʊn.dred/" }, { en: "C. /ˈhæn.drɪd/", vi: "/ˈhæn.drɪd/" }, { en: "D. /ˈhɒn.drəd/", vi: "/ˈhɒn.drəd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm chuẩn IPA của số '5' (Five) là gì?",
        audioText: "5-iron, sir.",
        options: [{ en: "A. /faɪv/", vi: "/faɪv/" }, { en: "B. /fɪf/", vi: "/fɪf/" }, { en: "C. /faɪf/", vi: "/faɪf/" }, { en: "D. /faɪ/", vi: "/faɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Phiên âm chuẩn IPA của số '12' (Twelve) là gì?",
        audioText: "We have twelve buggy cars.",
        options: [{ en: "A. /twelv/", vi: "/twelv/" }, { en: "B. /twelf/", vi: "/twelf/" }, { en: "C. /twerv/", vi: "/twerv/" }, { en: "D. /twelvθ/", vi: "/twelvθ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '20' (Twenty) trong tiếng Anh chuẩn IPA phát âm là gì?",
        audioText: "Twenty yards to the fringe.",
        options: [{ en: "A. /ˈtwen.ti/", vi: "/ˈtwen.ti/" }, { en: "B. /twenˈtiːn/", vi: "/twenˈtiːn/" }, { en: "C. /ˈtwen.ty/", vi: "/ˈtwen.ty/" }, { en: "D. /two.ty/", vi: "/two.ty/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Thousand' (hàng ngàn) có phiên âm IPA chuẩn là gì?",
        audioText: "One thousand members.",
        options: [{ en: "A. /ˈθaʊ.zənd/", vi: "/ˈθaʊ.zənd/" }, { en: "B. /ˈsaʊ.zənd/", vi: "/ˈsaʊ.zənd/" }, { en: "C. /ˈtoʊ.zənd/", vi: "/ˈtoʊ.zənd/" }, { en: "D. /ˈθoʊ.zænd/", vi: "/ˈθoʊ.zænd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '40' (Forty) được viết và phát âm IPA chuẩn như thế nào?",
        audioText: "Forty yards to the bunker.",
        options: [{ en: "A. Forty /ˈfɔːr.ti/", vi: "Forty (không có chữ u)" }, { en: "B. Fourty /ˈfɔːr.tiːn/", vi: "Fourty" }, { en: "C. Forth /ˈfɔːrθ/", vi: "Forth" }, { en: "D. Four-ty /fɔːrˈti/", vi: "Four-ty" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Caddie đọc số hố 'Hole number 9', số 9 (Nine) phát âm IPA chuẩn là gì?",
        audioText: "Hole number 9.",
        options: [{ en: "A. /naɪn/", vi: "/naɪn/" }, { en: "B. /nɪn/", vi: "/nɪn/" }, { en: "C. /neɪn/", vi: "/neɪn/" }, { en: "D. /naɪ/", vi: "/naɪ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Eight' (Số 8) đồng âm với từ nào trong tiếng Anh?",
        audioText: "8-iron, sir.",
        options: [{ en: "A. Ate", vi: "Ate (/eɪt/)" }, { en: "B. Eat", vi: "Eat (/iːt/)" }, { en: "C. At", vi: "At (/æt/)" }, { en: "D. Height", vi: "Height (/haɪt/)" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '7' (Seven) có phiên âm IPA chuẩn là gì?",
        audioText: "7-iron.",
        options: [{ en: "A. /ˈsev.ən/", vi: "/ˈsev.ən/" }, { en: "B. /ˈseɪ.vən/", vi: "/ˈseɪ.vən/" }, { en: "C. /ˈsev.en/", vi: "/ˈsev.en/" }, { en: "D. /sɪv.ən/", vi: "/sɪv.ən/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Từ 'Four' (Số 4) có phát âm âm cuối chuẩn Anh-Mỹ là gì?",
        audioText: "Par 4 hole.",
        options: [{ en: "A. /fɔːr/", vi: "/fɔːr/" }, { en: "B. /fɑːr/", vi: "/fɑːr/" }, { en: "C. /fʊər/", vi: "/fʊər/" }, { en: "D. /fəʊr/", vi: "/fəʊr/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '6' (Six) có âm cuối là gì?",
        audioText: "6-iron.",
        options: [{ en: "A. /ks/", vi: "Cụm phụ âm /ks/" }, { en: "B. /s/", vi: "Âm /s/" }, { en: "C. /z/", vi: "Âm /z/" }, { en: "D. /ʃ/", vi: "Âm /ʃ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '30' (Thirty) phát âm chuẩn IPA như thế nào?",
        audioText: "Thirty yards short.",
        options: [{ en: "A. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "B. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "C. /ˈtriː.ti/", vi: "/ˈtriː.ti/" }, { en: "D. /ˈθɜːr.ten/", vi: "/ˈθɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '50' (Fifty) có trọng âm rơi vào đâu?",
        audioText: "Fifty yards to the pin.",
        options: [{ en: "A. Âm tiết đầu (Fif-)", vi: "FIF-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Fif-TY" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Trong tiếng Anh, từ 'One' (Số 1) phát âm IPA chuẩn là gì?",
        audioText: "Hole 1.",
        options: [{ en: "A. /wʌn/", vi: "/wʌn/" }, { en: "B. /oʊn/", vi: "/oʊn/" }, { en: "C. /wɒn/", vi: "/wɒn/" }, { en: "D. /vʌn/", vi: "/vʌn/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '2' (Two) có nguyên âm kéo dài là gì trong IPA?",
        audioText: "2 shots.",
        options: [{ en: "A. /tuː/", vi: "/tuː/" }, { en: "B. /tʊ/", vi: "/tʊ/" }, { en: "C. /toʊ/", vi: "/toʊ/" }, { en: "D. /tʌ/", vi: "/tʌ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '10' (Ten) có nguyên âm ngắn nào?",
        audioText: "Ten yards.",
        options: [{ en: "A. /e/", vi: "Nguyên âm ngắn /e/" }, { en: "B. /æ/", vi: "Nguyên âm /æ/" }, { en: "C. /ɪ/", vi: "Nguyên âm /ɪ/" }, { en: "D. /ʌ/", vi: "Nguyên âm /ʌ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số '11' (Eleven) có trọng âm đặt ở âm tiết nào?",
        audioText: "11th hole.",
        options: [{ en: "A. Âm tiết 2 (-lev-)", vi: "e-LEV-en" }, { en: "B. Âm tiết 1 (E-)", vi: "E-lev-en" }, { en: "C. Âm tiết 3 (-en)", vi: "e-lev-EN" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Số thứ tự '3rd' (dùng cho hố số 3) phát âm IPA là gì?",
        audioText: "3rd hole.",
        options: [{ en: "A. /θɜːrd/", vi: "/θɜːrd/" }, { en: "B. /θriːθ/", vi: "/θriːθ/" }, { en: "C. /θɜːrt/", vi: "/θɜːrt/" }, { en: "D. /triːd/", vi: "/triːd/" }],
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
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm] Đâu là cách phát âm chuẩn IPA của từ 'Iron' (gậy sắt)?",
        audioText: "7-iron, sir.",
        options: [{ en: "A. /ˈaɪ.ən/", vi: "/ˈaɪ.ən/" }, { en: "B. /ˈaɪ.rən/", vi: "/ˈaɪ.rən/" }, { en: "C. /ˈiː.rɒn/", vi: "/ˈiː.rɒn/" }, { en: "D. /ˈaɪ.roʊn/", vi: "/ˈaɪ.roʊn/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Thiết bị] Máy đo khoảng cách bằng laser của Caddie phát âm IPA là gì?",
        audioText: "Let me check with my rangefinder.",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Số đếm & Gậy] Khi kiểm gậy thấy thiếu 1 gậy (chỉ có 13 gậy), Caddie báo khách thế nào?",
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
        options: [{ en: "A. Âm tiết 1 (Dis-)", vi: "DIS-tance" }, { en: "B. Âm tiết 2 (-tance)", vi: "Dis-TANCE" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Thuật ngữ] Từ 'Pin' (cột cờ) có nguyên âm ngắn nào?",
        audioText: "Distance to the pin.",
        options: [{ en: "A. /ɪ/", vi: "Nguyên âm ngắn /ɪ/" }, { en: "B. /iː/", vi: "Nguyên âm /iː/" }, { en: "C. /e/", vi: "Nguyên âm /e/" }, { en: "D. /æ/", vi: "Nguyên âm /æ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.2", type: "mcq",
        title: "[1.2 Thuật ngữ] Đâu là từ phát âm đúng của từ 'Flag' (cờ chỉ hố gôn)?",
        audioText: "135 yards to the flag.",
        options: [{ en: "A. /flæɡ/", vi: "/flæɡ/" }, { en: "B. /fleɡ/", vi: "/fleɡ/" }, { en: "C. /flɑːɡ/", vi: "/flɑːɡ/" }, { en: "D. /fleɪɡ/", vi: "/fleɪɡ/" }],
        correct: 0
    },[source: 10]

    // =========================================================================
    // SECTION 1.3: LỜI CHÀO, CHĂM SÓC & TRÒ CHUYỆN SỞ THÍCH (CÂU 51 - CÂU 90)
    // =========================================================================
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Chào hỏi] Khi gặp Golfer lần đầu tại Tee box hố 1, câu chào nào thể hiện sự chuyên nghiệp nhất?",
        audioText: "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.",
        options: [
            { en: "A. Good morning, Sir! Welcome to our golf club. I am your Caddie today.", vi: "Chào buổi sáng anh! Chào mừng anh tới sân gôn. Em là Caddie của anh hôm nay." },
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
        title: "[1.3 Sở thích] Từ vựng sở thích 'Chạy bộ thể dục' có phiên âm IPA chuẩn là gì?",
        audioText: "Jogging in the morning.",
        options: [{ en: "A. Jogging /ˈdʒɑː.ɡɪŋ/", vi: "Chạy bộ thể dục" }, { en: "B. Running", vi: "Chạy nhanh" }, { en: "C. Walking", vi: "Đi bộ" }, { en: "D. Jog", vi: "Chạy nhẹ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng sở thích 'Đi du lịch' có phiên âm IPA chuẩn là gì?",
        audioText: "Travelling around the world.",
        options: [{ en: "A. Travelling /ˈtræv.əl.ɪŋ/", vi: "Đi du lịch" }, { en: "B. Shopping", vi: "Mua sắm" }, { en: "C. Cooking", vi: "Nấu ăn" }, { en: "D. Sleeping", vi: "Ngủ nghỉ" }],
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
        title: "[1.3 Sở thích] Golfer nói: 'I like travelling. How about you?'. Caddie đáp lại lịch sự thế nào?",
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
        title: "[1.3 Sở thích] Từ vựng 'Xem truyền hình/TV' trong bài đọc sở thích phát âm IPA là gì?",
        audioText: "Watching TV.",
        options: [{ en: "A. Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", vi: "Xem TV" }, { en: "B. Looking TV", vi: "Nhìn TV" }, { en: "C. Seeing TV", vi: "Thấy TV" }, { en: "D. Listen TV", vi: "Nghe TV" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng 'Mua sắm' phát âm IPA chuẩn là gì?",
        audioText: "Shopping on weekends.",
        options: [{ en: "A. Shopping /ˈʃɑː.pɪŋ/", vi: "Mua sắm" }, { en: "B. Buying", vi: "Mua hàng" }, { en: "C. Selling", vi: "Bán hàng" }, { en: "D. Market", vi: "Chợ" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] Từ vựng 'Nấu ăn' có phiên âm IPA chuẩn là gì?",
        audioText: "Cooking for my family.",
        options: [{ en: "A. Cooking /ˈkʊk.ɪŋ/", vi: "Nấu ăn" }, { en: "B. Cooked", vi: "Đã nấu" }, { en: "C. Kitchen", vi: "Nhà bếp" }, { en: "D. Chef", vi: "Đầu bếp" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Sở thích] 'Ông thích du lịch hay xem TV hơn?', câu hỏi lựa chọn tiếng Anh đúng là gì?",
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
            { en: "A. Giữ giao tiếp bằng mắt và nụ cười thân thiện", vi: "Eye contact & smiling" },
            { en: "B. Đứng quay lưng lại phía khách", vi: "Đứng quay lưng" },
            { en: "C. Nhìn xuống đất đọc kịch bản", vi: "Nhìn xuống đất" },
            { en: "D. Nói thật nhanh không ngắt nghỉ", vi: "Nói quá nhanh" }
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
        options: [{ en: "A. Sir / Ma'am", vi: "Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Mister / Missis" }, { en: "C. Mister / Lady", vi: "Mister / Lady" }, { en: "D. Bro / Sister", vi: "Bro / Sister" }],
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
        options: [{ en: "A. Âm tiết thứ 2 (-lax)", vi: "re-LAX" }, { en: "B. Âm tiết thứ 1 (Re-)", vi: "RE-lax" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
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
        options: [{ en: "A. 2 âm tiết (/ˈbɪz.nɪs/)", vi: "2 âm tiết" }, { en: "B. 3 âm tiết (/ˈbɪ.zɪ.nəs/)", vi: "3 âm tiết" }, { en: "C. 4 âm tiết", vi: "4 âm tiết" }, { en: "D. 1 âm tiết", vi: "1 âm tiết" }],
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
        title: "[1.3 Đưa gậy] Khi trao gậy sắt số 5 cho Golfer, Caddie xác nhận lịch sự bằng câu nói nào?",
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
        title: "[1.3 Chỉ hướng] Khuyên Golfer ngắm sang bên trái vì bên phải có bẫy cát (bunker), câu chỉ hướng đúng là gì?",
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
        title: "[1.3 Tư vấn] 'Which club do you prefer, Sir?', câu hỏi này có nghĩa tiếng Việt là gì?",
        audioText: "Which club do you prefer, Sir?",
        options: [
            { en: "A. Anh chọn/muốn cây gậy nào ạ?", vi: "Which club do you prefer?" },
            { en: "B. Gậy này của ai ạ?", vi: "Whose club is this?" },
            { en: "C. Anh có thích túi gậy này không?", vi: "Do you like this bag?" },
            { en: "D. Gậy này bao nhiêu tiền ạ?", vi: "How much is this club?" }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Động từ 'Aim' trong câu 'Please aim to the left' có nghĩa là gì?",
        audioText: "Please aim to the left.",
        options: [{ en: "A. Ngắm / Hướng cú đánh", vi: "Aim = Ngắm hướng" }, { en: "B. Đánh thật mạnh", vi: "Hit hard" }, { en: "C. Lau sạch gậy", vi: "Clean club" }, { en: "D. Đặt bóng xuống", vi: "Place ball" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Từ 'Bunker' (bẫy cát) có âm tiết thứ nhất chứa nguyên âm nào?",
        audioText: "Watch out for the bunker.",
        options: [{ en: "A. /ʌ/", vi: "Nguyên âm /ʌ/" }, { en: "B. /æ/", vi: "Nguyên âm /æ/" }, { en: "C. /ʊ/", vi: "Nguyên âm /ʊ/" }, { en: "D. /ɒ/", vi: "Nguyên âm /ɒ/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phục vụ] Lau sạch rãnh mặt gậy trước khi giao cho khách, Caddie nói câu nào?",
        audioText: "I have cleaned the club head for you, Sir.",
        options: [
            { en: "A. I have cleaned the club head for you, Sir.", vi: "Em đã lau sạch đầu gậy cho anh rồi ạ." },
            { en: "B. The club is dirty, take it.", vi: "Gậy bẩn đấy, cầm lấy." },
            { en: "C. Don't touch the club.", vi: "Đừng chạm vào gậy." },
            { en: "D. This club is old.", vi: "Gậy này cũ rồi." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Từ 'Water hazard' (bẫy nước) phát âm IPA chuẩn là gì?",
        audioText: "Watch out for the water hazard.",
        options: [{ en: "A. /ˈwɔː.tər ˈhæz.ərd/", vi: "/ˈwɔː.tər ˈhæz.ərd/" }, { en: "B. /ˈwɑː.tər ˈhɑː.zɑːrd/", vi: "/ˈwɑː.tər ˈhɑː.zɑːrd/" }, { en: "C. /ˈwɔː.tə ˈhæ.zɑːd/", vi: "/ˈwɔː.tə ˈhæ.zɑːd/" }, { en: "D. /ˈwɔː.tər ˈhæz.əd/", vi: "/ˈwɔː.tər ˈhæz.əd/" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Từ 'Fairway' có trọng âm rơi vào đâu?",
        audioText: "The ball is on the fairway.",
        options: [{ en: "A. Âm tiết 1 (Fair-)", vi: "FAIR-way" }, { en: "B. Âm tiết 2 (-way)", vi: "Fair-WAY" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 An toàn] Cảnh báo bóng nguy hiểm bay về phía người khác, Caddie hô từ gì theo luật quốc tế?",
        audioText: "FORE!",
        options: [{ en: "A. FORE!", vi: "FORE! (Bóng nguy hiểm)" }, { en: "B. FOUR!", vi: "FOUR!" }, { en: "C. BALL!", vi: "BALL!" }, { en: "D. LOOK OUT!", vi: "LOOK OUT!" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Mảng cỏ bị xới lên sau cú đánh gậy sắt trên Fairway gọi là gì?",
        audioText: "Please replace the divot.",
        options: [{ en: "A. Divot", vi: "Divot (/ˈdɪv.ət/)" }, { en: "B. Pitch", vi: "Pitch" }, { en: "C. Grass", vi: "Grass" }, { en: "D. Piot", vi: "Piot" }],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Phục vụ] Khi Golfer nhờ thay/đặt lại mảng cỏ divot, Caddie thực hiện và đáp lại thế nào?",
        audioText: "I will replace the divot right away, Sir.",
        options: [
            { en: "A. I will replace the divot right away, Sir.", vi: "Em sẽ đặt lại mảng cỏ divot ngay lập tức ạ." },
            { en: "B. Fix it yourself.", vi: "Tự sửa đi." },
            { en: "C. Divot is no problem, leave it.", vi: "Mảng cỏ không sao, kệ nó." },
            { en: "D. Don't hit divot again.", vi: "Đừng đánh tróc cỏ nữa." }
        ],
        correct: 0
    },
    {
        lesson: "L1", section: "section1.3", type: "mcq",
        title: "[1.3 Thuật ngữ] Từ 'Rough' (vùng cỏ cao bẫy) có phát âm âm cuối là gì?",
        audioText: "The ball is in the rough.",
        options: [{ en: "A. /f/", vi: "Âm /f/ (/rʌf/)" }, { en: "B. /ɡ/", vi: "Âm /ɡ/" }, { en: "C. /k/", vi: "Âm /k/" }, { en: "D. /p/", vi: "Âm /p/" }],
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
        title: "[1.3 Phản xạ] Golfer hỏi vị trí ngắm phát bóng, Caddie trả lời hướng dẫn đúng chuẩn là gì?",
        audioText: "Please aim to the left, Sir. Watch out for the bunker on the right.",
        options: [
            { en: "A. Please aim to the left, Sir. Watch out for the bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, chú ý bẫy cát bên phải ạ." },
            { en: "B. Hit anywhere you like, Sir.", vi: "Đánh đâu tùy thích anh ơi." },
            { en: "C. Shoot straight to the water hazard.", vi: "Bắn thẳng vào bẫy nước đi." },
            { en: "D. Don't hit today, it is dangerous.", vi: "Hôm nay đừng đánh, nguy hiểm lắm." }
        ],
        correct: 0
    }
);
