const lesson1Data = {
  lessonTitle: "Lesson 1: Caddie Communication & Professional Foundation",
  description: "Bộ tài nguyên rèn luyện Nghe & Nói thực chiến cho Caddie: Chào hỏi, Số đếm khoảng cách, Sở thích, Kiểm tra gậy & Chỉ hướng bóng",

  pronunciationDrills: [
    {
      drillId: "p1_minimal_pairs",
      title: "Luyện phát âm cặp âm dễ nhầm lẫn (Minimal Pairs Drill)",
      type: "minimal-pairs",
      description: "Phân biệt âm bật môi vô thanh /p/ - hữu thanh /b/ và trọng âm số đếm -teen / -ty.",
      items: [
        {
          id: "mp_1",
          pair: ["Par /pɑːr/", "Bar /bɑːr/"],
          targetWord: "Par",
          ipa: "/pɑːr/",
          pronunciationTip: "Mím chặt hai môi rồi bật mạnh luồng khí ra ngoài (không rung dây thanh).",
          sampleSentence: "You got a Par on this hole, sir.",
          audioScript: "You got a Par on this hole, sir.",
          question: "Âm /p/ trong từ 'Par' cần phát âm như thế nào để không bị nhầm với từ 'Bar'?",
          options: [
            "Mím môi bật hơi mạnh vô thanh (không rung thanh quản)",
            "Đọc rung dây thanh quản giống âm /b/",
            "Đọc thành âm /f/ kéo dài",
            "Uốn lưỡi chạm vòm miệng trên"
          ],
          correctAnswer: "Mím môi bật hơi mạnh vô thanh (không rung thanh quản)",
          rationale: "Âm /p/ là âm bật môi vô thanh (voiceless bilabial plosive), khác âm /b/ hữu thanh."
        },
        {
          id: "mp_2",
          pair: ["Fifteen /ˌfɪfˈtiːn/", "Fifty /ˈfɪf.ti/"],
          targetWord: "Fifteen",
          ipa: "/ˌfɪfˈtiːn/",
          pronunciationTip: "Nhấn trọng âm vào âm tiết thứ 2 '-teen' và kéo dài nguyên âm /tiːn/.",
          sampleSentence: "It is one hundred and fifteen yards to the green.",
          audioScript: "It is one hundred and fifteen yards to the green.",
          question: "Khi báo khoảng cách '115 yards', Caddie nhấn trọng âm từ 'Fifteen' ở đâu để Golfer không nghe nhầm thành 'Fifty' (50)?",
          options: [
            "Nhấn mạnh vào âm tiết thứ hai (-teen)",
            "Nhấn mạnh vào âm tiết thứ nhất (Fif-)",
            "Đọc lướt cả hai âm tiết với tông trầm",
            "Nhấn âm vào từ 'yards' phía sau"
          ],
          correctAnswer: "Nhấn mạnh vào âm tiết thứ hai (-teen)",
          rationale: "Số đuôi -teen có trọng âm rơi vào '-teen' (/tiːn/), còn số đuôi -ty có trọng âm rơi vào âm tiết đầu tiên."
        },
        {
          id: "mp_3",
          pair: ["Fourteen /ˌfɔːrˈtiːn/", "Forty /ˈfɔːr.ti/"],
          targetWord: "Fourteen",
          ipa: "/ˌfɔːrˈtiːn/",
          pronunciationTip: "Phân biệt 14 (nhấn -teen) và 40 (nhấn Four-). Caddie đếm đủ 14 gậy tại Buggy station.",
          sampleSentence: "You have fourteen golf clubs in your bag, sir.",
          audioScript: "You have fourteen golf clubs, sir! Please sign here.",
          question: "Caddie thông báo số lượng gậy 'You have 14 golf clubs, sir'. Từ 'Fourteen' phát âm chuẩn IPA là gì?",
          options: [
            "/ˌfɔːrˈtiːn/ (Trọng âm rơi vào -teen)",
            "/ˈfɔːr.ti/ (Trọng âm rơi vào Four-)",
            "/fɔːr.tiːnz/",
            "/fɔːr.ten/"
          ],
          correctAnswer: "/ˌfɔːrˈtiːn/ (Trọng âm rơi vào -teen)",
          rationale: "Số 14 đọc là /ˌfɔːrˈtiːn/ với trọng âm phụ ở Four- và trọng âm chính ở -teen."
        },
        {
          id: "mp_4",
          pair: ["Putter /ˈpʌt.ər/", "Butter /ˈbʌt.ər/"],
          targetWord: "Putter",
          ipa: "/ˈpʌt.ər/",
          pronunciationTip: "Âm /p/ đầu từ 'Putter' phải bật hơi rõ ràng.",
          sampleSentence: "Here is your putter, Sir.",
          audioScript: "Here is your putter, Sir.",
          question: "Khi đưa gậy gạt cho khách, Caddie phát âm từ 'Putter' như thế nào để tránh nhầm với 'Butter'?",
          options: [
            "Bật hơi mạnh vô thanh ở âm /p/ đầu từ",
            "Đọc rung dây thanh quản ở âm đầu",
            "Đọc thành âm /f/ nhẹ",
            "Bỏ qua âm đầu đọc là 'utter'"
          ],
          correctAnswer: "Bật hơi mạnh vô thanh ở âm /p/ đầu từ",
          rationale: "Gậy gạt là 'Putter' bắt đầu bằng âm bật môi vô thanh /p/."
        }
      ]
    },

    {
      drillId: "p2_shadowing",
      title: "Luyện nói ngữ điệu & Nhấn trọng âm Caddie (Caddie Sentence Shadowing)",
      type: "shadowing",
      description: "Luyện đọc nối âm, nhấn trọng âm câu giao tiếp chuẩn mực của Caddie trên sân.",
      items: [
        {
          id: "sh_1",
          situation: "Chào mừng Golfer lần đầu đến sân",
          sentence: "Good morning, Sir! Welcome to our golf club. I am your Caddie today.",
          ipa: "/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kəm tuː aʊər ɡɒlf klʌb. aɪ æm jʊər ˈkæd.i təˈdeɪ./",
          audioScript: "Good morning, Sir! Welcome to our golf club. I am your Caddie today.",
          question: "Trong câu chào mừng Golfer, những từ ngữ nào cần được nhấn trọng âm để tạo ngữ điệu hào hứng?",
          options: [
            "MORNING, WELCOME, GOLF CLUB, CADDIE",
            "Good, Sir, to, am",
            "our, today, your, I",
            "Không nhấn từ nào, đọc đều như nhau"
          ],
          correctAnswer: "MORNING, WELCOME, GOLF CLUB, CADDIE",
          rationale: "Trọng âm câu (sentence stress) tập trung vào danh từ và động từ quan trọng chứa thông tin chính."
        },
        {
          id: "sh_2",
          situation: "Chỉ hướng & Cảnh báo bẫy cát",
          sentence: "Please aim to the left, Sir. Watch out for the bunker on the right.",
          ipa: "/pliːz eɪm tuː ðə left, sɜːr. wɑːtʃ aʊt fɔːr ðə ˈbʌŋ.kər ɒn ðə raɪt./",
          audioScript: "Please aim to the left, Sir. Watch out for the bunker on the right.",
          question: "Khi cảnh báo bẫy cát bên phải cho Golfer, từ trọng tâm cần phát âm to và rõ là gì?",
          options: [
            "LEFT, WATCH OUT, BUNKER, RIGHT",
            "Please, to, the, on",
            "Sir, for, the, aim",
            "Chỉ nhấn duy nhất từ 'Please'"
          ],
          correctAnswer: "LEFT, WATCH OUT, BUNKER, RIGHT",
          rationale: "Các từ chỉ hướng (left, right) và hành động/chướng ngại vật (watch out, bunker) là từ mang thông tin cốt lõi."
        },
        {
          id: "sh_3",
          situation: "Chăm sóc Golfer khi trời nắng nóng",
          sentence: "The sun is strong today, Sir. Would you like some cold water or a wet towel?",
          ipa: "/ðə sʌn ɪz strɒŋ təˈdeɪ, sɜːr. wʊd juː laɪk sʌm koʊld ˈwɔː.tər ɔːr ə wet ˈtaʊ.əl?/",
          audioScript: "The sun is strong today, Sir. Would you like some cold water or a wet towel?",
          question: "Lựa chọn dịch vụ 'cold water or a wet towel' nên lên/hạ giọng như thế nào ở cuối câu hỏi?",
          options: [
            "Lên giọng nhẹ ở 'cold water' và hạ giọng ở 'wet towel'",
            "Hạ giọng ở 'cold water' và lên giọng ở 'wet towel'",
            "Lên giọng thật cao ở cả hai cụm từ",
            "Hạ giọng đột ngột ngay từ đầu câu"
          ],
          correctAnswer: "Lên giọng nhẹ ở 'cold water' và hạ giọng ở 'wet towel'",
          rationale: "Quy tắc ngữ điệu lựa chọn (Alternative Questions): Lên giọng ở lựa chọn thứ nhất và hạ giọng ở lựa chọn cuối cùng."
        }
      ]
    }
  ],

  listeningSpellingDrills: [
    {
      drillId: "sp_1",
      title: "Nghe đánh vần tên Golfer (Spelling Golfer Name)",
      description: "Nghe Golfer đánh vần tên riêng theo bảng chữ cái và chọn từ đúng.",
      audioScript: "Good morning! My name is Harrison, spelled H - A - R - R - I - S - O - N.",
      blankSentence: "Golfer's name is Mr. _________.",
      options: ["HARRISON", "HARRIS", "HARISON", "HARRYS"],
      correctAnswer: "HARRISON",
      ipa: "/ˈhær.ɪ.sən/",
      rationale: "Golfer đánh vần: H-A-R-R-I-S-O-N (chú ý double R)."
    },
    {
      drillId: "sp_2",
      title: "Nghe thông báo khoảng cách (Golf Distance Number)",
      description: "Nghe Caddie báo khoảng cách tới cờ cho Golfer và chọn đáp án chính xác.",
      audioScript: "It is one hundred and fifty yards to the green, sir.",
      blankSentence: "The distance to the green is _________ yards.",
      options: ["150", "115", "50", "105"],
      correctAnswer: "150",
      ipa: "/wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːdz/",
      rationale: "Audio phát âm rõ: 'One hundred and fifty yards' (150 yards)."
    },
    {
      drillId: "sp_3",
      title: "Nghe điền từ dụng cụ chăm sóc (Caddie Service - Wet Towel)",
      description: "Nghe đoạn hội thoại Caddie mời khách dùng khăn lạnh.",
      audioScript: "The weather is very hot. Would you like a wet towel, Sir?",
      blankSentence: "Would you like a _________ towel, Sir?",
      options: ["wet", "dry", "cold", "warm"],
      correctAnswer: "wet",
      ipa: "/wet ˈtaʊ.əl/",
      rationale: "Cụm từ chuẩn 'wet towel' nghĩa là khăn lạnh/khăn ướt lau mặt cho khách."
    },
    {
      drillId: "sp_4",
      title: "Nghe điền số lượng gậy (Golf Equipment Check)",
      description: "Nghe Caddie kiểm tra số lượng gậy tại nhà xe gôn (Buggy Station).",
      audioScript: "You have fourteen golf clubs, sir! Please sign here.",
      blankSentence: "You have _________ golf clubs, sir!",
      options: ["fourteen", "forty", "four", "fifteen"],
      correctAnswer: "fourteen",
      ipa: "/ˌfɔːrˈtiːn/",
      rationale: "Số lượng gậy tiêu chuẩn trong túi của Golfer là 14 cây (fourteen /ˌfɔːrˈtiːn/)."
    },
    {
      drillId: "sp_5",
      title: "Nghe từ vựng sở thích của Golfer (Hobby - Travelling)",
      description: "Nghe Golfer chia sẻ về sở thích lúc rảnh rỗi.",
      audioScript: "I really like travelling around the world on weekends.",
      blankSentence: "The Golfer's hobby is _________.",
      options: ["travelling", "jogging", "cooking", "shopping"],
      correctAnswer: "travelling",
      ipa: "/ˈtræv.əl.ɪŋ/",
      rationale: "Audio nêu rõ: 'I really like travelling...' (/ˈtræv.əl.ɪŋ/ - đi du lịch)."
    }
  ],

  caddieReflexDrills: [
    {
      drillId: "rf_1",
      situation: "Chào mừng khách lần đầu đến sân gôn (First Impression)",
      golferAudioScript: "Hello! Is this the main clubhouse?",
      golferPrompt: "Golfer: 'Hello! Is this the main clubhouse?'",
      options: [
        "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.",
        "Yes, this is clubhouse. Give me your bag now.",
        "Hello, go inside yourself please.",
        "Good morning! Do you want to pay money now?"
      ],
      correctAnswer: "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.",
      rationale: "Mẫu câu chào tiêu chuẩn thể hiện sự chu đáo, lịch sự và giới thiệu sẵn sàng hỗ trợ khách.",
      politenessTip: "Luôn giữ nụ cười, xưng 'Sir/Ma'am' và giới thiệu tên/vai trò Caddie."
    },
    {
      drillId: "rf_2",
      situation: "Chỉ hướng đánh & Cảnh báo bẫy cát (Directions & Bunker Warning)",
      golferAudioScript: "Where should I aim for this tee shot?",
      golferPrompt: "Golfer: 'Where should I aim for this tee shot?'",
      options: [
        "Please aim to the left, Sir. Watch out for the bunker on the right.",
        "Hit anywhere you like, Sir.",
        "Shoot straight to the water hazard.",
        "Don't hit today, it is dangerous."
      ],
      correctAnswer: "Please aim to the left, Sir. Watch out for the bunker on the right.",
      rationale: "Cung cấp chỉ dẫn hướng ngắm cụ thể ('aim to the left') và cảnh báo bẫy cát ('bunker on the right').",
      politenessTip: "Đưa tay chỉ hướng rõ ràng và phát âm từ 'bunker' /ˈbʌŋ.kər/ chuẩn xác."
    },
    {
      drillId: "rf_3",
      situation: "Gợi ý chọn gậy số 5 (Equipment Selection - 5-iron)",
      golferAudioScript: "It looks a bit far. Which club do you recommend?",
      golferPrompt: "Golfer: 'It looks a bit far. Which club do you recommend?'",
      options: [
        "Here is your 5-iron, Sir. Is this the club you need?",
        "Take any club, I don't know.",
        "Use your putter for 150 yards, Sir.",
        "You don't need a club for this shot."
      ],
      correctAnswer: "Here is your 5-iron, Sir. Is this the club you need?",
      rationale: "Thực hiện giao gậy số 5 lịch sự kèm lời hỏi xác nhận nhẹ nhàng.",
      politenessTip: "Bàn giao gậy bằng hai tay, hướng tay cầm (grip) về phía Golfer."
    },
    {
      drillId: "rf_4",
      situation: "Hỏi thăm sở thích khi chờ trên xe Buggy (Small Talk - Hobbies)",
      golferAudioScript: "I like travelling in my free time. How about you?",
      golferPrompt: "Golfer: 'I like travelling in my free time. How about you?'",
      options: [
        "I like travelling too, Sir! I also like cooking for my family.",
        "I don't like travelling, it is boring.",
        "I only like sleeping all day.",
        "Why do you ask me that question?"
      ],
      correctAnswer: "I like travelling too, Sir! I also like cooking for my family.",
      rationale: "Đồng cảm với sở thích của khách ('I like travelling too') và chia sẻ ngắn gọn, lịch thiệp ('like cooking').",
      politenessTip: "Giữ không khí trò chuyện cởi mở, chuyên nghiệp và thân thiện."
    },
    {
      drillId: "rf_5",
      situation: "Chăm sóc khách khi thời tiết nắng nóng (Offering Comfort)",
      golferAudioScript: "Phew! It is getting really hot out here today!",
      golferPrompt: "Golfer: 'Phew! It is getting really hot out here today!'",
      options: [
        "The sun is strong today, Sir. Would you like some cold water or a wet towel?",
        "Yes, very hot. Stop playing and go home.",
        "You should carry an umbrella yourself.",
        "It is hot for me too, I am tired."
      ],
      correctAnswer: "The sun is strong today, Sir. Would you like some cold water or a wet towel?",
      rationale: "Chủ động thể hiện sự quan tâm chu đáo bằng nước lạnh hoặc khăn ướt.",
      politenessTip: "Chủ động phục vụ trước khi khách phải lên tiếng yêu cầu."
    }
  ],

  sections: [
    {
      sectionId: 1,
      sectionTitle: "Phần 1: Bảng chữ cái, Phát âm & Số đếm trên sân Golf (Alphabet, Phonetics & Numbers)",
      questions: [
        {
          id: 1,
          question: "Khi Golfer đánh vần tên thương hiệu gôn 'T-I-T-L-E-I-S-T', chữ cái 'I' trong tiếng Anh phát âm chuẩn IPA là gì?",
          options: ["/aɪ/", "/iː/", "/eɪ/", "/ɛ/"],
          answer: "/aɪ/",
          rationale: "Tên chữ cái 'I' trong bảng chữ cái phát âm là /aɪ/.",
          ipa: "/ˈtaɪ.təl.ɪst/",
          audioScript: "Titleist is spelled T-I-T-L-E-I-S-T."
        },
        {
          id: 2,
          question: "Khách hàng nói: 'My name is Peter, P-E-T-E-R'. Để xác nhận tên khách không bị nhầm P với B, Caddie nên dùng từ quy chuẩn NATO nào cho chữ P?",
          options: ["Papa", "Peter", "Paul", "Pink"],
          answer: "Papa",
          rationale: "Trong bảng mã NATO, 'P' được đọc là 'Papa' để tránh nhầm với 'B' (Bravo).",
          ipa: "/ˈpɑː.pə/",
          audioScript: "P as in Papa, B as in Bravo."
        },
        {
          id: 3,
          question: "Golfer hỏi khoảng cách và nghe Caddie nói '115 yards'. Caddie cần phát âm từ 'Fifteen' như thế nào để khách không nhầm với 'Fifty' (50)?",
          options: [
            "Nhấn mạnh trọng âm vào âm tiết thứ hai (-teen /tiːn/)",
            "Nhấn mạnh trọng âm vào âm tiết đầu (Fif-)",
            "Đọc lướt cả hai âm tiết với giọng trầm",
            "Đọc kéo dài âm Fif-"
          ],
          answer: "Nhấn mạnh trọng âm vào âm tiết thứ hai (-teen /tiːn/)",
          rationale: "Số đuôi '-teen' (13-19) có trọng âm rơi vào âm tiết thứ hai (-teen).",
          ipa: "/ˌfɪfˈtiːn/ vs /ˈfɪf.ti/",
          audioScript: "It is 115 yards to the green."
        },
        {
          id: 4,
          question: "Khi báo khoảng cách tới cờ cho Golfer là '150 yards', cách đọc tiếng Anh tự nhiên và chuẩn nhất là gì?",
          options: [
            "One hundred and fifty yards",
            "Fifteen zero yards",
            "One five zero yards",
            "One hundred fifteen yards"
          ],
          answer: "One hundred and fifty yards",
          rationale: "Cách đọc chuẩn số 150 yards là 'One hundred and fifty yards' hoặc 'One fifty yards'.",
          ipa: "/wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːdz/",
          audioScript: "It is one hundred and fifty yards to the green."
        },
        {
          id: 5,
          question: "Chữ cái 'H' trong tên loại gậy Hybrid được phát âm chuẩn IPA là gì?",
          options: ["/eɪtʃ/", "/heɪtʃ/", "/eɪdʒ/", "/ætʃ/"],
          answer: "/eɪtʃ/",
          rationale: "Tên chữ cái 'H' phát âm chuẩn IPA là /eɪtʃ/.",
          ipa: "/eɪtʃ/",
          audioScript: "Hybrid starts with letter H."
        },
        {
          id: 6,
          question: "Caddie nghe Golfer nói: 'I need a 60-degree wedge'. Số '60' (Sixty) có trọng âm rơi vào đâu?",
          options: [
            "Âm tiết đầu (Six-)",
            "Âm tiết cuối (-ty)",
            "Cả hai âm tiết bằng nhau",
            "Không có trọng âm"
          ],
          answer: "Âm tiết đầu (Six-)",
          rationale: "Số hàng chục đuôi '-ty' có trọng âm rơi vào âm tiết đầu tiên: SIX-ty /ˈsɪk.sti/.",
          ipa: "/ˈsɪk.sti/",
          audioScript: "I need a 60 degree wedge."
        },
        {
          id: 7,
          question: "Phiên âm IPA chuẩn của số '3' (Three) trên sân gôn là gì?",
          options: ["/θriː/", "/triː/", "/free/", "/driː/"],
          answer: "/θriː/",
          rationale: "Số 3 bắt đầu bằng âm ma sát răng-lưỡi vô thanh /θ/, phát âm là /θriː/.",
          ipa: "/θriː/",
          audioScript: "Three iron, sir."
        },
        {
          id: 8,
          question: "Đâu là phiên âm IPA chuẩn của số '13' (Thirteen)?",
          options: ["/ˌθɜːrˈtiːn/", "/ˈθɜːr.ti/", "/θriː.tiːn/", "/θɜːr.ten/"],
          answer: "/ˌθɜːrˈtiːn/",
          rationale: "Thirteen phát âm là /ˌθɜːrˈtiːn/ với trọng âm chính đặt tại -teen.",
          ipa: "/ˌθɜːrˈtiːn/",
          audioScript: "Hole number 13."
        },
        {
          id: 9,
          question: "Khi Caddie đếm số gậy tại Buggy Station: 'You have 14 golf clubs, sir'. Số '14' được đọc là gì?",
          options: ["Fourteen /ˌfɔːrˈtiːn/", "Forty /ˈfɔːr.ti/", "Four /fɔːr/", "Fourteenth /ˌfɔːrˈtiːnθ/"],
          answer: "Fourteen /ˌfɔːrˈtiːn/",
          rationale: "Số đếm 14 đọc là Fourteen (/ˌfɔːrˈtiːn/).",
          ipa: "/ˌfɔːrˈtiːn/",
          audioScript: "You have fourteen golf clubs, sir!"
        },
        {
          id: 10,
          question: "Từ 'Hundred' trong cụm 'One hundred yards' phát âm IPA chuẩn là gì?",
          options: ["/ˈhʌn.drəd/", "/ˈhʊn.dred/", "/ˈhæn.drɪd/", "/ˈhɒn.drəd/"],
          answer: "/ˈhʌn.drəd/",
          rationale: "'Hundred' có nguyên âm /ʌ/ ở âm tiết đầu: /ˈhʌn.drəd/.",
          ipa: "/ˈhʌn.drəd/",
          audioScript: "One hundred yards."
        },
        {
          id: 11,
          question: "Cặp chữ cái nào sau đây dễ gây nhầm lẫn nhất khi trao đổi khoảng cách hoặc loại gậy qua bộ đàm?",
          options: ["B và P", "A và Z", "K và L", "H và O"],
          answer: "B và P",
          rationale: "B (/biː/) và P (/piː/) là cặp âm bật môi dễ nhầm lẫn nếu đàm nhiễu.",
          ipa: "/biː/ vs /piː/",
          audioScript: "B as in Bravo, P as in Papa."
        },
        {
          id: 12,
          question: "Phiên âm chuẩn IPA của số '5' (Five) là gì?",
          options: ["/faɪv/", "/fɪf/", "/faɪf/", "/faɪ/"],
          answer: "/faɪv/",
          rationale: "'Five' kết thúc bằng âm hữu thanh /v/: /faɪv/.",
          ipa: "/faɪv/",
          audioScript: "5-iron, sir."
        },
        {
          id: 13,
          question: "Phiên âm chuẩn IPA của số '12' (Twelve) là gì?",
          options: ["/twelv/", "/twelf/", "/twerv/", "/twelvθ/"],
          answer: "/twelv/",
          rationale: "Twelve kết thúc bằng âm /v/: /twelv/.",
          ipa: "/twelv/",
          audioScript: "We have twelve buggy cars."
        },
        {
          id: 14,
          question: "Số '20' (Twenty) trong tiếng Anh chuẩn IPA phát âm là gì?",
          options: ["/ˈtwen.ti/", "/twenˈtiːn/", "/ˈtwen.ty/", "/two.ty/"],
          answer: "/ˈtwen.ti/",
          rationale: "Twenty phát âm là /ˈtwen.ti/ với trọng âm rơi vào âm tiết thứ nhất.",
          ipa: "/ˈtwen.ti/",
          audioScript: "Twenty yards to the fringe."
        },
        {
          id: 15,
          question: "Khi Golfer hỏi điểm số: 'What is your score, sir?' - Khách đáp: '80'. Caddie nên đáp lại phản xạ thế nào?",
          options: ["Great score, Sir!", "Very bad score!", "You lose!", "Okay zero."],
          answer: "Great score, Sir!",
          rationale: "Khen ngợi điểm số tốt của khách một cách hào hứng: 'Great score, Sir!'.",
          ipa: "/ɡreɪt skɔːr, sɜːr!/",
          audioScript: "Great score, Sir!"
        },
        {
          id: 16,
          question: "Từ 'Thousand' (hàng ngàn) có phiên âm IPA chuẩn là gì?",
          options: ["/ˈθaʊ.zənd/", "/ˈsaʊ.zənd/", "/ˈtoʊ.zənd/", "/ˈθoʊ.zænd/"],
          answer: "/ˈθaʊ.zənd/",
          rationale: "'Thousand' bắt đầu bằng âm /θ/ và nguyên âm đôi /aʊ/: /ˈθaʊ.zənd/.",
          ipa: "/ˈθaʊ.zənd/",
          audioScript: "One thousand members."
        },
        {
          id: 17,
          question: "Số '40' (Forty) được viết và phát âm IPA chuẩn như thế nào?",
          options: ["Forty /ˈfɔːr.ti/", "Fourty /ˈfɔːr.tiːn/", "Forth /ˈfɔːrθ/", "Four-ty /fɔːrˈti/"],
          answer: "Forty /ˈfɔːr.ti/",
          rationale: "Số 40 viết là 'Forty' (không có chữ 'u') và phát âm trọng âm rơi vào âm đầu /ˈfɔːr.ti/.",
          ipa: "/ˈfɔːr.ti/",
          audioScript: "Forty yards to the bunker."
        },
        {
          id: 18,
          question: "Caddie đọc số hố 'Hole number 9', số 9 (Nine) phát âm IPA chuẩn là gì?",
          options: ["/naɪn/", "/nɪn/", "/neɪn/", "/naɪ/"],
          answer: "/naɪn/",
          rationale: "Nine phát âm là /naɪn/ với nguyên âm đôi /aɪ/.",
          ipa: "/naɪn/",
          audioScript: "Hole number 9."
        },
        {
          id: 19,
          question: "Từ 'Eight' (Số 8) đồng âm với từ nào trong tiếng Anh?",
          options: ["Ate", "Eat", "At", "Height"],
          answer: "Ate",
          rationale: "'Eight' /eɪt/ đồng âm với động từ quá khứ 'ate' /eɪt/.",
          ipa: "/eɪt/",
          audioScript: "8-iron, sir."
        },
        {
          id: 20,
          question: "Số '7' (Seven) có phiên âm IPA chuẩn là gì?",
          options: ["/ˈsev.ən/", "/ˈseɪ.vən/", "/ˈsev.en/", "/sɪv.ən/"],
          answer: "/ˈsev.ən/",
          rationale: "Seven phát âm là /ˈsev.ən/.",
          ipa: "/ˈsev.ən/",
          audioScript: "7-iron."
        },
        {
          id: 21,
          question: "Từ 'Four' (Số 4) có phát âm âm cuối chuẩn Anh-Mỹ là gì?",
          options: ["/fɔːr/", "/fɑːr/", "/fʊər/", "/fəʊr/"],
          answer: "/fɔːr/",
          rationale: "'Four' được phát âm là /fɔːr/ trong giọng Anh-Mỹ.",
          ipa: "/fɔːr/",
          audioScript: "Par 4 hole."
        },
        {
          id: 22,
          question: "Số '6' (Six) có âm cuối là gì?",
          options: ["/ks/", "/s/", "/z/", "/ʃ/"],
          answer: "/ks/",
          rationale: "'Six' /sɪks/ kết thúc bằng cụm phụ âm /ks/.",
          ipa: "/sɪks/",
          audioScript: "6-iron."
        },
        {
          id: 23,
          question: "Số '30' (Thirty) phát âm chuẩn IPA như thế nào?",
          options: ["/ˈθɜːr.ti/", "/ˌθɜːrˈtiːn/", "/ˈtriː.ti/", "/ˈθɜːr.ten/"],
          answer: "/ˈθɜːr.ti/",
          rationale: "Thirty phát âm là /ˈθɜːr.ti/ với trọng âm rơi vào âm tiết đầu tiên.",
          ipa: "/ˈθɜːr.ti/",
          audioScript: "Thirty yards short."
        },
        {
          id: 24,
          question: "Số '50' (Fifty) có trọng âm rơi vào đâu?",
          options: ["Âm tiết đầu (Fif-)", "Âm tiết cuối (-ty)", "Cả hai âm tiết", "Không có trọng âm"],
          answer: "Âm tiết đầu (Fif-)",
          rationale: "Số đuôi -ty luôn có trọng âm đặt ở âm tiết thứ nhất: FIF-ty /ˈfɪf.ti/.",
          ipa: "/ˈfɪf.ti/",
          audioScript: "Fifty yards to the pin."
        },
        {
          id: 25,
          question: "Trong tiếng Anh, từ 'One' (Số 1) phát âm IPA chuẩn là gì?",
          options: ["/wʌn/", "/oʊn/", "/wɒn/", "/vʌn/"],
          answer: "/wʌn/",
          rationale: "One bắt đầu bằng bán nguyên âm /w/, phát âm là /wʌn/.",
          ipa: "/wʌn/",
          audioScript: "Hole 1."
        },
        {
          id: 26,
          question: "Số '2' (Two) có nguyên âm kéo dài là gì trong IPA?",
          options: ["/tuː/", "/tʊ/", "/toʊ/", "/tʌ/"],
          answer: "/tuː/",
          rationale: "Two phát âm là /tuː/ với nguyên âm /uː/ kéo dài.",
          ipa: "/tuː/",
          audioScript: "2 shots."
        },
        {
          id: 27,
          question: "Số '10' (Ten) có nguyên âm ngắn nào?",
          options: ["/e/", "/æ/", "/ɪ/", "/ʌ/"],
          answer: "/e/",
          rationale: "Ten có nguyên âm ngắn /e/: /ten/.",
          ipa: "/ten/",
          audioScript: "Ten yards."
        },
        {
          id: 28,
          question: "Số '11' (Eleven) có trọng âm đặt ở âm tiết nào?",
          options: ["Âm tiết 2 (-lev-)", "Âm tiết 1 (E-)", "Âm tiết 3 (-en)", "Không có trọng âm"],
          answer: "Âm tiết 2 (-lev-)",
          rationale: "Eleven có trọng âm rơi vào âm tiết thứ hai: e-LEV-en /ɪˈlev.ən/.",
          ipa: "/ɪˈlev.ən/",
          audioScript: "11th hole."
        },
        {
          id: 29,
          question: "Khi Golfer đọc mã booking có số '0', số 0 thường được phát âm ngắn gọn là gì?",
          options: ["Oh /əʊ/", "Zero", "Null", "Nil"],
          answer: "Oh /əʊ/",
          rationale: "Số 0 trong thông số hay mã số thường được người nước ngoài đọc gọn là 'Oh' (/əʊ/).",
          ipa: "/əʊ/",
          audioScript: "Booking number G-8-0."
        },
        {
          id: 30,
          question: "Số thứ tự '3rd' (dùng cho hố số 3) phát âm IPA là gì?",
          options: ["/θɜːrd/", "/θriːθ/", "/θɜːrt/", "/triːd/"],
          answer: "/θɜːrd/",
          rationale: "Số thứ tự 3rd đọc là 'third' /θɜːrd/.",
          ipa: "/θɜːrd/",
          audioScript: "3rd hole."
        }
      ]
    },

    {
      sectionId: 2,
      sectionTitle: "Phần 2: Lời chào, Ấn tượng đầu tiên, Chăm sóc & Trò chuyện sở thích (Guest Greeting & Small Talk)",
      questions: [
        {
          id: 31,
          question: "Khi gặp Golfer lần đầu tại Tee box hố 1, câu chào nào thể hiện sự chuyên nghiệp và chu đáo nhất?",
          options: [
            "Good morning, Sir! Welcome to [Golf Club Name]. I am your Caddie today. I am here to assist you.",
            "Hello Sir! Give me your bag quickly.",
            "Hi! Are you ready to play now?",
            "Morning, let's go!"
          ],
          answer: "Good morning, Sir! Welcome to [Golf Club Name]. I am your Caddie today. I am here to assist you.",
          rationale: "Câu chào đầy đủ lịch sự, chào mừng đến sân, tự giới thiệu tên và khẳng định sẵn sàng hỗ trợ khách.",
          ipa: "/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kəm tuː.../",
          audioScript: "Good morning, Sir! Welcome to our golf club. I am your Caddie today."
        },
        {
          id: 32,
          question: "Để hỏi lịch sự xem đây có phải lần đầu Golfer đến chơi tại sân mình không, Caddie dùng mẫu câu nào?",
          options: [
            "Is this your first time playing at our course, Sir?",
            "Did you play here before or never?",
            "Have you ever seen this course in your life?",
            "Why do you come to our course today?"
          ],
          answer: "Is this your first time playing at our course, Sir?",
          rationale: "Mẫu câu chuẩn mực lịch sự: 'Is this your first time playing at our course, Sir?'.",
          ipa: "/ɪz ðɪs jʊər fɜːrst taɪm ˈpleɪ.ɪŋ æt aʊər kɔːrs, sɜːr?/",
          audioScript: "Is this your first time playing at our course, Sir?"
        },
        {
          id: 33,
          question: "Khi thời tiết nắng nóng, Caddie chủ động mời khách uống nước lạnh bằng câu nào?",
          options: [
            "The sun is strong today, Sir. Would you like some cold water?",
            "Drink water now, it is hot.",
            "Do you have water in your bag?",
            "You look thirsty, go buy water."
          ],
          answer: "The sun is strong today, Sir. Would you like some cold water?",
          rationale: "Thể hiện sự chủ động quan tâm chu đáo tới sức khỏe và sự thoải mái của khách.",
          ipa: "/ðə sʌn ɪz strɒŋ təˈdeɪ, sɜːr. wʊd juː laɪk sʌm koʊld ˈwɔː.tər?/",
          audioScript: "The sun is strong today. Would you like some cold water?"
        },
        {
          id: 34,
          question: "Caddie muốn hỏi mời khách dùng khăn lạnh lau mồ hôi, câu nào chuẩn nhất?",
          options: [
            "Would you like a wet towel, Sir?",
            "Do you want a wet cloth?",
            "Take this towel quickly.",
            "Is your face dirty, Sir?"
          ],
          answer: "Would you like a wet towel, Sir?",
          rationale: "'Would you like a wet towel, Sir?' là mẫu câu phục vụ tinh tế và lịch thiệp.",
          ipa: "/wʊd juː laɪk ə wet ˈtaʊ.əl, sɜːr?/",
          audioScript: "Would you like a wet towel, Sir?"
        },
        {
          id: 35,
          question: "Khi Golfer thực hiện một cú đánh đẹp mắt, Caddie nên ngợi khen ngay lập tức bằng câu nào?",
          options: [
            "That is a great shot, Sir!",
            "You hit luckily, Sir!",
            "The ball went fine.",
            "Not bad for you."
          ],
          answer: "That is a great shot, Sir!",
          rationale: "'That is a great shot, Sir!' khen ngợi kịp thời giúp khích lệ tinh thần người chơi.",
          ipa: "/ðæt ɪz ə ɡreɪt ʃɒt, sɜːr!/",
          audioScript: "That is a great shot, Sir!"
        },
        {
          id: 36,
          question: "Khi trò chuyện xã giao (small talk), Caddie hỏi khách về lý do chơi gôn: 'Anh chơi gôn để thư giãn hay kết nối công việc?', câu tiếng Anh chuẩn là gì?",
          options: [
            "Do you play golf to relax or for business, Sir?",
            "Why do you play golf here?",
            "Is golf your work or fun?",
            "Do you make money from golf?"
          ],
          answer: "Do you play golf to relax or for business, Sir?",
          rationale: "Mẫu câu hỏi tinh tế: 'Do you play golf to relax or for business, Sir?'.",
          ipa: "/duː juː pleɪ ɡɒlf tuː rɪˈlæks ɔːr fɔːr ˈbɪz.nɪs, sɜːr?/",
          audioScript: "Do you play golf to relax or for business, Sir?"
        },
        {
          id: 37,
          question: "Từ vựng sở thích 'Chạy bộ thể dục' có phiên âm IPA chuẩn là gì?",
          options: ["Jogging /ˈdʒɑː.ɡɪŋ/", "Running /ˈrʌn.ɪŋ/", "Walking /ˈwɔː.kɪŋ/", "Jog /ˈdʒɑːɡ/"],
          answer: "Jogging /ˈdʒɑː.ɡɪŋ/",
          rationale: "'Jogging' /ˈdʒɑː.ɡɪŋ/ chỉ hoạt động chạy bộ thể dục nhẹ nhàng.",
          ipa: "/ˈdʒɑː.ɡɪŋ/",
          audioScript: "I like jogging in the morning."
        },
        {
          id: 38,
          question: "Từ vựng sở thích 'Đi du lịch' có phiên âm IPA chuẩn là gì?",
          options: ["Travelling /ˈtræv.əl.ɪŋ/", "Shopping /ˈʃɑː.pɪŋ/", "Cooking /ˈkʊk.ɪŋ/", "Sleeping /ˈsliː.pɪŋ/"],
          answer: "Travelling /ˈtræv.əl.ɪŋ/",
          rationale: "'Travelling' /ˈtræv.əl.ɪŋ/ nghĩa là đi du lịch.",
          ipa: "/ˈtræv.əl.ɪŋ/",
          audioScript: "I enjoy travelling."
        },
        {
          id: 39,
          question: "Khi hỏi về sở thích lúc rảnh rỗi của Golfer một cách lịch sự, Caddie dùng mẫu câu nào?",
          options: [
            "What are your hobbies in your free time, Sir?",
            "What do you do when you are lazy?",
            "Why don't you work at weekend?",
            "Tell me your secret hobbies."
          ],
          answer: "What are your hobbies in your free time, Sir?",
          rationale: "Mẫu câu xã giao chuẩn mực: 'What are your hobbies in your free time, Sir?'.",
          ipa: "/wɑːt ɑːr jʊər ˈhɑː.biz ɪn jʊər friː taɪm, sɜːr?/",
          audioScript: "What are your hobbies in your free time, Sir?"
        },
        {
          id: 40,
          question: "Golfer nói: 'I like travelling. How about you?'. Caddie đáp lại ngắn gọn và thân thiện như thế nào?",
          options: [
            "I like travelling too, Sir! I also like cooking.",
            "I hate travelling, it costs money.",
            "I don't have free time like you.",
            "I only like staying at home."
          ],
          answer: "I like travelling too, Sir! I also like cooking.",
          rationale: "Đáp lại lịch thiệp, đồng cảm sở thích và chia sẻ thêm sở thích nấu ăn ('cooking').",
          ipa: "/aɪ laɪk ˈtræv.əl.ɪŋ tuː, sɜːr! aɪ ˈɔːl.soʊ laɪk ˈkʊk.ɪŋ./",
          audioScript: "I like travelling too, Sir! I also like cooking."
        },
        {
          id: 41,
          question: "Từ vựng 'Xem truyền hình/TV' trong bài đọc sở thích phát âm IPA là gì?",
          options: ["Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", "Looking TV /ˈlʊk.ɪŋ ˌtiːˈviː/", "Seeing TV /ˈsiː.ɪŋ ˌtiːˈviː/", "Listen TV /ˈlɪs.ən ˌtiːˈviː/"],
          answer: "Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/",
          rationale: "'Watching TV' dùng động từ watch cho việc xem truyền hình.",
          ipa: "/ˈwɑːtʃ.ɪŋ ˌtiːˈviː/",
          audioScript: "Watching TV."
        },
        {
          id: 42,
          question: "Từ vựng 'Mua sắm' phát âm IPA chuẩn là gì?",
          options: ["Shopping /ˈʃɑː.pɪŋ/", "Buying /ˈbaɪ.ɪŋ/", "Selling /ˈsel.ɪŋ/", "Market /ˈmɑːr.kɪt/"],
          answer: "Shopping /ˈʃɑː.pɪŋ/",
          rationale: "'Shopping' /ˈʃɑː.pɪŋ/ là hoạt động mua sắm.",
          ipa: "/ˈʃɑː.pɪŋ/",
          audioScript: "Shopping on weekends."
        },
        {
          id: 43,
          question: "Từ vựng 'Nấu ăn' có phiên âm IPA chuẩn là gì?",
          options: ["Cooking /ˈkʊk.ɪŋ/", "Cooked /kʊkt/", "Kitchen /ˈkɪtʃ.ən/", "Chef /ʃef/"],
          answer: "Cooking /ˈkʊk.ɪŋ/",
          rationale: "'Cooking' /ˈkʊk.ɪŋ/ nghĩa là việc nấu ăn.",
          ipa: "/ˈkʊk.ɪŋ/",
          audioScript: "Cooking for my family."
        },
        {
          id: 44,
          question: "Khi Caddie chủ động hỏi lựa chọn giữa hai sở thích: 'Ông thích du lịch hay xem TV hơn?', câu hỏi tiếng Anh đúng là gì?",
          options: [
            "Do you like travelling or watching TV, Sir?",
            "Are you travelling and watching TV standard?",
            "Why you travel or watch TV?",
            "You choose travel or TV now?"
          ],
          answer: "Do you like travelling or watching TV, Sir?",
          rationale: "Mẫu câu hỏi lựa chọn chuẩn: 'Do you like travelling or watching TV, Sir?'.",
          ipa: "/duː juː laɪk ˈtræv.əl.ɪŋ ɔːr ˈwɑːtʃ.ɪŋ ˌtiːˈviː, sɜːr?/",
          audioScript: "Do you like travelling or watching TV, Sir?"
        },
        {
          id: 45,
          question: "Yếu tố phi ngôn ngữ quan trọng nhất khi chào hỏi tạo ấn tượng ban đầu (First Impression) là gì?",
          options: [
            "Giữ giao tiếp bằng mắt (eye contact) và nụ cười thân thiện",
            "Đứng quay lưng lại phía khách",
            "Nhìn xuống đất và đọc kịch bản",
            "Nói thật nhanh không ngắt nghỉ"
          ],
          answer: "Giữ giao tiếp bằng mắt (eye contact) và nụ cười thân thiện",
          rationale: "Giao tiếp bằng mắt và nụ cười tạo sự tin tưởng và ấn tượng tích cực ban đầu.",
          ipa: "/aɪ ˈkɑːn.tækt ænd ˈsmaɪ.lɪŋ/",
          audioScript: "Maintaining eye contact and smiling."
        },
        {
          id: 46,
          question: "Khi thấy khách bị đổ nhiều mồ hôi do trời nắng, ngoài đưa nước, Caddie có thể chủ động đề nghị gì thêm?",
          options: [
            "Do you need more sunscreen, Sir?",
            "Do you want to buy a new hat?",
            "Should I call an ambulance?",
            "Please go under the tree and stay there."
          ],
          answer: "Do you need more sunscreen, Sir?",
          rationale: "Chủ động hỏi khách có cần thêm kem chống nắng: 'Do you need more sunscreen, Sir?'.",
          ipa: "/duː juː niːd mɔːr ˈsʌn.skriːn, sɜːr?/",
          audioScript: "Do you need more sunscreen, Sir?"
        },
        {
          id: 47,
          question: "Caddie muốn hỏi: 'Golf có phải môn thể thao yêu thích của anh không?', câu hỏi tiếng Anh chuẩn là gì?",
          options: [
            "Is golf your favorite sport, Sir?",
            "Do you play golf best in the world?",
            "Why golf is favorite for you?",
            "Is golf the only sport you know?"
          ],
          answer: "Is golf your favorite sport, Sir?",
          rationale: "Mẫu câu chuẩn: 'Is golf your favorite sport, Sir?'.",
          ipa: "/ɪz ɡɒlf jʊər ˈfeɪ.vər.ɪt spɔːrt, sɜːr?/",
          audioScript: "Is golf your favorite sport, Sir?"
        },
        {
          id: 48,
          question: "Cách xưng hô tôn trọng nhất dành cho khách nam và khách nữ trên sân gôn là gì?",
          options: ["Sir / Ma'am", "Mister / Missis", "Mister / Lady", "Bro / Sister"],
          answer: "Sir / Ma'am",
          rationale: "Trong ngành dịch vụ gôn cao cấp, chuẩn mực là dùng 'Sir' cho nam và 'Ma'am' cho nữ.",
          ipa: "/sɜːr/ | /mæm/",
          audioScript: "Yes, Sir. Thank you, Ma'am."
        },
        {
          id: 49,
          question: "Khi Golfer khen 'You did a great job today!', Caddie nên đáp lại thế nào để thể hiện sự mến khách?",
          options: [
            "It was my pleasure serving you today, Sir!",
            "I know I am very good.",
            "Give me more tip then.",
            "You are welcome, bye."
          ],
          answer: "It was my pleasure serving you today, Sir!",
          rationale: "'It was my pleasure serving you today, Sir!' là câu đáp lại lịch thiệp và chuyên nghiệp nhất.",
          ipa: "/ɪt wɒz maɪ ˈpleʒ.ər ˈsɜːr.vɪŋ juː təˈdeɪ, sɜːr!/",
          audioScript: "It was my pleasure serving you today, Sir!"
        },
        {
          id: 50,
          question: "Từ vựng 'Sleeping' (Ngủ nghỉ) có phiên âm IPA chuẩn là gì?",
          options: ["/ˈsliː.pɪŋ/", "/ˈslɪp.ɪŋ/", "/ˈslept.ɪŋ/", "/ˈsliːp/"],
          answer: "/ˈsliː.pɪŋ/",
          rationale: "'Sleeping' có nguyên âm /iː/ kéo dài: /ˈsliː.pɪŋ/.",
          ipa: "/ˈsliː.pɪŋ/",
          audioScript: "Sleeping in my free time."
        },
        {
          id: 51,
          question: "Từ 'Relax' trong câu 'play golf to relax' có trọng âm rơi vào âm tiết nào?",
          options: ["Âm tiết thứ 2 (-lax)", "Âm tiết thứ 1 (Re-)", "Cả hai âm tiết", "Không có trọng âm"],
          answer: "Âm tiết thứ 2 (-lax)",
          rationale: "Động từ 'relax' có trọng âm rơi vào âm tiết thứ hai: re-LAX /rɪˈlæks/.",
          ipa: "/rɪˈlæks/",
          audioScript: "Play golf to relax."
        },
        {
          id: 52,
          question: "Cụm từ 'Cold water' có âm /ld/ phát âm như thế nào?",
          options: ["Âm /l/ uốn lưỡi nhẹ nối sang âm bật /d/", "Bỏ qua âm /l/ chỉ đọc /d/", "Đọc thành 'co-water'", "Đọc thành 'col-lter'"],
          answer: "Âm /l/ uốn lưỡi nhẹ nối sang âm bật /d/",
          rationale: "Cụm 'cold' /koʊld/ giữ âm uốn lưỡi /l/ và bật nhẹ /d/ sang water.",
          ipa: "/koʊld ˈwɔː.tər/",
          audioScript: "Cold water."
        },
        {
          id: 53,
          question: "Khi khách hỏi 'How are you today?', Caddie trả lời chuyên nghiệp nhất là gì?",
          options: [
            "I am very well, thank you, Sir! How are you today?",
            "I am tired because I walk a lot.",
            "Normal, nothing special.",
            "So so, ready to go home."
          ],
          answer: "I am very well, thank you, Sir! How are you today?",
          rationale: "Trả lời tích cực, lịch sự cảm ơn và hỏi thăm lại sự thoải mái của khách.",
          ipa: "/aɪ æm ˈveri wel, θæŋk juː, sɜːr!/",
          audioScript: "I am very well, thank you, Sir! How are you today?"
        },
        {
          id: 54,
          question: "Từ 'Business' trong cụm 'play golf for business' phát âm bao nhiêu âm tiết?",
          options: ["2 âm tiết (/ˈbɪz.nɪs/)", "3 âm tiết (/ˈbɪ.zɪ.nəs/)", "4 âm tiết", "1 âm tiết"],
          answer: "2 âm tiết (/ˈbɪz.nɪs/)",
          rationale: "'Business' phát âm chuẩn chỉ có 2 âm tiết là /ˈbɪz.nɪs/.",
          ipa: "/ˈbɪz.nɪs/",
          audioScript: "Play golf for business."
        },
        {
          id: 55,
          question: "Khi khách chuẩn bị di chuyển bằng xe Buggy, Caddie nhắc lịch sự: 'Mời ông lên xe', câu tiếng Anh là gì?",
          options: [
            "Please get on the buggy, Sir.",
            "Sit down buggy now.",
            "Jump in car quickly.",
            "Drive buggy yourself, Sir."
          ],
          answer: "Please get on the buggy, Sir.",
          rationale: "Mẫu câu lịch sự: 'Please get on the buggy, Sir.'.",
          ipa: "/pliːz ɡet ɒn ðə ˈbʌɡ.i, sɜːr./",
          audioScript: "Please get on the buggy, Sir."
        },
        {
          id: 56,
          question: "Từ 'Welcome' trong lời chào có trọng âm rơi vào đâu?",
          options: ["Âm tiết 1 (Wel-)", "Âm tiết 2 (-come)", "Cả hai âm tiết", "Không có trọng âm"],
          answer: "Âm tiết 1 (Wel-)",
          rationale: "'Welcome' có trọng âm rơi vào âm tiết đầu tiên: WEL-come /ˈwel.kəm/.",
          ipa: "/ˈwel.kəm/",
          audioScript: "Welcome to our golf club."
        },
        {
          id: 57,
          question: "Khi kết thúc vòng chơi, Caddie gửi lời chào tạm biệt lịch sự như thế nào?",
          options: [
            "Thank you very much, Sir! Have a great day and hope to see you again!",
            "Bye bye, give me money.",
            "Finished, go home now.",
            "See you never."
          ],
          answer: "Thank you very much, Sir! Have a great day and hope to see you again!",
          rationale: "Cảm ơn chân thành và chúc khách một ngày tuyệt vời.",
          ipa: "/θæŋk juː ˈveri mʌtʃ, sɜːr!/",
          audioScript: "Thank you very much, Sir! Have a great day!"
        },
        {
          id: 58,
          question: "Cụm từ 'Wet towel' có âm 'e' phát âm là nguyên âm gì?",
          options: ["/e/ ngắn", "/iː/ dài", "/æ/ mở rộng", "/aɪ/"],
          answer: "/e/ ngắn",
          rationale: "'Wet' phát âm bằng nguyên âm ngắn /e/: /wet/.",
          ipa: "/wet ˈtaʊ.əl/",
          audioScript: "Wet towel."
        },
        {
          id: 59,
          question: "Khi khách đánh hỏng một cú đánh, Caddie nên động viên bằng câu nào?",
          options: [
            "Don't worry, Sir! We can recover on the next shot.",
            "That was a terrible shot!",
            "You lost this game.",
            "Why did you hit like that?"
          ],
          answer: "Don't worry, Sir! We can recover on the next shot.",
          rationale: "Giữ tinh thần tích cực trấn an Golfer: 'Don't worry, Sir! We can recover...'.",
          ipa: "/doʊnt ˈwʌr.i, sɜːr!/",
          audioScript: "Don't worry, Sir! We can recover on the next shot."
        },
        {
          id: 60,
          question: "Từ 'Course' trong 'golf course' phát âm nguyên âm nào?",
          options: ["/ɔːr/ dài", "/ɑːr/", "/ʊər/", "/ɒ/ ngắn"],
          answer: "/ɔːr/ dài",
          rationale: "'Course' phát âm là /kɔːrs/ với nguyên âm /ɔːr/.",
          ipa: "/kɔːrs/",
          audioScript: "Welcome to our golf course."
        }
      ]
    },

    {
      sectionId: 3,
      sectionTitle: "Phần 3: Kiểm tra dụng cụ, Báo khoảng cách & Chỉ hướng đánh (Equipment Check & Directions)",
      questions: [
        {
          id: 61,
          question: "Khi trao gậy sắt số 5 cho Golfer, Caddie xác nhận lịch sự bằng câu nói nào?",
          options: [
            "Here is your 5-iron, Sir. Is this the club you need?",
            "Take this 5-iron now.",
            "Is 5-iron okay or not?",
            "5-iron here, hit it."
          ],
          answer: "Here is your 5-iron, Sir. Is this the club you need?",
          rationale: "Mẫu câu chuẩn mực giao gậy: 'Here is your 5-iron, Sir. Is this the club you need?'.",
          ipa: "/hɪər ɪz jʊər faɪv aɪ.ən, sɜːr./",
          audioScript: "Here is your 5-iron, Sir. Is this the club you need?"
        },
        {
          id: 62,
          question: "Báo khoảng cách chuẩn 150 yards đến vùng green cho Golfer, Caddie dùng mẫu câu nào?",
          options: [
            "It is one hundred and fifty yards to the green, Sir.",
            "Green is 150 long.",
            "One hundred fifty distance to flag.",
            "Far away, about 150 yards."
          ],
          answer: "It is one hundred and fifty yards to the green, Sir.",
          rationale: "Mẫu câu báo khoảng cách chuẩn: 'It is one hundred and fifty yards to the green, Sir.'.",
          ipa: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːdz tuː ðə ɡriːn, sɜːr./",
          audioScript: "It is one hundred and fifty yards to the green, Sir."
        },
        {
          id: 63,
          question: "Caddie muốn khuyên Golfer ngắm sang bên trái vì bên phải có bẫy cát (bunker), câu chỉ hướng đúng là gì?",
          options: [
            "Please aim to the left, Sir. There is a bunker on the right.",
            "Hit right into the sand bunker.",
            "Left is bad, right is sand.",
            "Don't look left or right."
          ],
          answer: "Please aim to the left, Sir. There is a bunker on the right.",
          rationale: "Mẫu câu chỉ hướng chuẩn: 'Please aim to the left, Sir. There is a bunker on the right.'.",
          ipa: "/pliːz eɪm tuː ðə left, sɜːr. ðeər ɪz ə ˈbʌŋ.kər ɒn ðə raɪt./",
          audioScript: "Please aim to the left, Sir. There is a bunker on the right."
        },
        {
          id: 64,
          question: "Cảnh báo nhanh Golfer chú ý bẫy cát trước cú đánh, Caddie dùng câu ngắn nào trong Drill log?",
          options: [
            "Watch out for the bunker, Sir.",
            "Look at the sand, Sir.",
            "Bunker is coming to you.",
            "Danger sand here."
          ],
          answer: "Watch out for the bunker, Sir.",
          rationale: "Mẫu câu nhắc nhở nhanh: 'Watch out for the bunker, Sir.'.",
          ipa: "/wɑːtʃ aʊt fɔːr ðə ˈbʌŋ.kər, sɜːr./",
          audioScript: "Watch out for the bunker, Sir."
        },
        {
          id: 65,
          question: "Khi Golfer hỏi 'Which club do you prefer, Sir?', câu hỏi này có nghĩa tiếng Việt là gì?",
          options: [
            "Anh chọn/muốn gậy nào ạ?",
            "Gậy này của ai ạ?",
            "Anh có thích túi gậy này không?",
            "Gậy này bao nhiêu tiền ạ?"
          ],
          answer: "Anh chọn/muốn gậy nào ạ?",
          rationale: "'Which club do you prefer?' là câu hỏi tôn trọng ý kiến chọn gậy của khách.",
          ipa: "/wɪtʃ klʌb duː juː prɪˈfɜːr, sɜːr?/",
          audioScript: "Which club do you prefer, Sir?"
        },
        {
          id: 66,
          question: "Đâu là cách phát âm chuẩn IPA của từ 'Iron' (gậy sắt)?",
          options: ["/ˈaɪ.ən/ hoặc /ˈaɪ.ərn/", "/ˈaɪ.rən/", "/ˈiː.rɒn/", "/ˈaɪ.roʊn/"],
          answer: "/ˈaɪ.ən/ hoặc /ˈaɪ.ərn/",
          rationale: "Iron phát âm là /ˈaɪ.ən/ (UK) hoặc /ˈaɪ.ərn/ (US), chữ 'r' không đọc thành 'ri-on'.",
          ipa: "/ˈaɪ.ən/",
          audioScript: "7-iron, sir."
        },
        {
          id: 67,
          question: "Thiết bị đo khoảng cách bằng laser mà Caddie sử dụng có tên tiếng Anh phát âm IPA là gì?",
          options: ["Rangefinder /ˈreɪndʒˌfaɪn.dər/", "Laser Watch /ˈleɪ.zər wɑːtʃ/", "Meter /ˈmiː.tər/", "Distance Binocular"],
          answer: "Rangefinder /ˈreɪndʒˌfaɪn.dər/",
          rationale: "Rangefinder /ˈreɪndʒˌfaɪn.dər/ là máy đo khoảng cách chuyên dụng.",
          ipa: "/ˈreɪndʒˌfaɪn.dər/",
          audioScript: "Let me check with my rangefinder."
        },
        {
          id: 68,
          question: "Động từ 'Aim' trong câu 'Please aim to the left' có nghĩa là gì?",
          options: ["Ngắm / Hướng cú đánh", "Đánh thật mạnh", "Lau sạch gậy", "Đặt bóng xuống"],
          answer: "Ngắm / Hướng cú đánh",
          rationale: "'Aim' /eɪm/ nghĩa là ngắm mục tiêu hoặc hướng cú đánh.",
          ipa: "/eɪm/",
          audioScript: "Please aim to the left."
        },
        {
          id: 69,
          question: "Từ 'Bunker' (bẫy cát) có âm tiết thứ nhất chứa nguyên âm nào?",
          options: ["/ʌ/", "/æ/", "/ʊ/", "/ɒ/"],
          answer: "/ʌ/",
          rationale: "'Bunker' /ˈbʌŋ.kər/ chứa nguyên âm /ʌ/ ở âm tiết đầu.",
          ipa: "/ˈbʌŋ.kər/",
          audioScript: "Watch out for the bunker."
        },
        {
          id: 70,
          question: "Khi Caddie kiểm tra gậy tại Buggy station và báo: 'You have 14 golf clubs, Sir! Please sign here', câu này đề nghị khách làm gì?",
          options: [
            "Xác nhận đủ 14 gậy và ký tên vào phiếu kiểm gậy",
            "Đếm lại 40 cây gậy",
            "Trả tiền thuê gậy",
            "Ký tên tặng túi gậy"
          ],
          answer: "Xác nhận đủ 14 gậy và ký tên vào phiếu kiểm gậy",
          rationale: "Quy trình xác minh kiểm đếm đủ 14 gậy và mời khách ký xác nhận.",
          ipa: "/pliːz saɪn hɪər/",
          audioScript: "You have fourteen golf clubs, sir! Please sign here."
        },
        {
          id: 71,
          question: "Từ 'Putter' (gậy gạt) phát âm âm tiết đầu chứa nguyên âm gì?",
          options: ["/ʌ/", "/ʊ/", "/uː/", "/ɒ/"],
          answer: "/ʌ/",
          rationale: "'Putter' /ˈpʌt.ər/ có nguyên âm /ʌ/ ở âm tiết đầu.",
          ipa: "/ˈpʌt.ər/",
          audioScript: "Here is your Putter, Sir."
        },
        {
          id: 72,
          question: "Gậy 'Driver' (gậy gỗ số 1) phát âm IPA chuẩn là gì?",
          options: ["/ˈdraɪ.vər/", "/ˈdrɪ.vər/", "/ˈdreɪ.vər/", "/ˈdraɪ.və/"],
          answer: "/ˈdraɪ.vər/",
          rationale: "Driver có âm tiết đầu chứa nguyên âm đôi /aɪ/: /ˈdraɪ.vər/.",
          ipa: "/ˈdraɪ.vər/",
          audioScript: "Driver for the tee shot."
        },
        {
          id: 73,
          question: "Từ 'Green' trong 'to the green' có âm 'ee' phát âm là gì?",
          options: ["/iː/ dài", "/ɪ/ ngắn", "/eɪ/", "/e/"],
          answer: "/iː/ dài",
          rationale: "'Green' /ɡriːn/ có nguyên âm /iː/ kéo dài.",
          ipa: "/ɡriːn/",
          audioScript: "150 yards to the green."
        },
        {
          id: 74,
          question: "Từ 'Left' (bên trái) và 'Right' (bên phải) có nguyên âm tương ứng là gì?",
          options: ["/e/ và /aɪ/", "/æ/ và /iː/", "/ɪ/ và /eɪ/", "/e/ và /ɪ/"],
          answer: "/e/ và /aɪ/",
          rationale: "'Left' chứa nguyên âm /e/ (/left/), 'Right' chứa nguyên âm đôi /aɪ/ (/raɪt/).",
          ipa: "/left/ | /raɪt/",
          audioScript: "Aim to the left, bunker on the right."
        },
        {
          id: 75,
          question: "Dụng cụ dùng để sửa vết lõm bóng trên mặt Green có tên tiếng Anh là gì?",
          options: ["Pitch mark repairer", "Divot repairer", "Green cleaner", "Ball wiper"],
          answer: "Pitch mark repairer",
          rationale: "'Pitch mark repairer' là dụng cụ dùng để sửa vết bóng rơi trên Green.",
          ipa: "/pɪtʃ mɑːrk rɪˈpeər.ər/",
          audioScript: "Pitch mark repairer."
        },
        {
          id: 76,
          question: "Khi lau sạch các rãnh mặt gậy (grooves) trước khi giao cho khách, Caddie có thể nói câu nào?",
          options: [
            "I have cleaned the club head for you, Sir.",
            "The club is dirty, take it.",
            "Don't touch the club.",
            "This club is old."
          ],
          answer: "I have cleaned the club head for you, Sir.",
          rationale: "Thông báo đã vệ sinh mặt gậy sạch sẽ: 'I have cleaned the club head for you, Sir.'.",
          ipa: "/aɪ hæv kliːnd ðə klʌb hed fɔːr juː, sɜːr./",
          audioScript: "I have cleaned the club head for you, Sir."
        },
        {
          id: 77,
          question: "Từ 'Wedge' (gậy kỹ thuật) có âm cuối là phụ âm gì?",
          options: ["/dʒ/", "/ʒ/", "/tʃ/", "/ɡ/"],
          answer: "/dʒ/",
          rationale: "'Wedge' /wedʒ/ kết thúc bằng phụ âm /dʒ/.",
          ipa: "/wedʒ/",
          audioScript: "60 degree wedge."
        },
        {
          id: 78,
          question: "Từ 'Distance' (khoảng cách) có trọng âm rơi vào âm tiết nào?",
          options: ["Âm tiết 1 (Dis-)", "Âm tiết 2 (-tance)", "Cả hai âm tiết", "Không có trọng âm"],
          answer: "Âm tiết 1 (Dis-)",
          rationale: "'Distance' có trọng âm đặt ở âm tiết thứ nhất: DIS-tance /ˈdɪs.təns/.",
          ipa: "/ˈdɪs.təns/",
          audioScript: "Checking the distance."
        },
        {
          id: 79,
          question: "Từ 'Water hazard' (bẫy nước) phát âm IPA chuẩn là gì?",
          options: ["/ˈwɔː.tər ˈhæz.ərd/", "/ˈwɑː.tər ˈhɑː.zɑːrd/", "/ˈwɔː.tə ˈhæ.zɑːd/", "/ˈwɔː.tər ˈhæz.əd/"],
          answer: "/ˈwɔː.tər ˈhæz.ərd/",
          rationale: "'Water hazard' phát âm chuẩn là /ˈwɔː.tər ˈhæz.ərd/.",
          ipa: "/ˈwɔː.tər ˈhæz.ərd/",
          audioScript: "Watch out for the water hazard."
        },
        {
          id: 80,
          question: "Từ 'Fairway' có trọng âm rơi vào đâu?",
          options: ["Âm tiết 1 (Fair-)", "Âm tiết 2 (-way)", "Cả hai âm tiết", "Không có trọng âm"],
          answer: "Âm tiết 1 (Fair-)",
          rationale: "'Fairway' có trọng âm rơi vào âm tiết thứ nhất: FAIR-way /ˈfeər.weɪ/.",
          ipa: "/ˈfeər.weɪ/",
          audioScript: "The ball is on the fairway."
        },
        {
          id: 81,
          question: "Khi hô cảnh báo bóng nguy hiểm bay về phía người khác, Caddie hô từ gì theo luật quốc tế?",
          options: ["FORE!", "FOUR!", "BALL!", "LOOK OUT!"],
          answer: "FORE!",
          rationale: "'FORE!' /fɔːr/ là từ hô cảnh báo quy chuẩn quốc tế trên sân gôn.",
          ipa: "/fɔːr/",
          audioScript: "FORE!"
        },
        {
          id: 82,
          question: "Mảng cỏ bị xới lên sau cú đánh gậy sắt trên Fairway gọi là gì?",
          options: ["Divot", "Pitch", "Grass", "Piot"],
          answer: "Divot",
          rationale: "'Divot' /ˈdɪv.ət/ là mảng cỏ bị xới tróc khi thực hiện cú đánh.",
          ipa: "/ˈdɪv.ət/",
          audioScript: "Please replace the divot."
        },
        {
          id: 83,
          question: "Khi Golfer nhờ thay/đặt lại mảng cỏ divot, Caddie thực hiện và đáp lại thế nào?",
          options: [
            "I will replace the divot right away, Sir.",
            "Fix it yourself.",
            "Divot is no problem, leave it.",
            "Don't hit divot again."
          ],
          answer: "I will replace the divot right away, Sir.",
          rationale: "Đáp lại lịch sự cam kết xử lý mảng cỏ divot ngay lập tức.",
          ipa: "/aɪ wɪl rɪˈpleɪs ðə ˈdɪv.ət raɪt əˈweɪ, sɜːr./",
          audioScript: "I will replace the divot right away, Sir."
        },
        {
          id: 84,
          question: "Từ 'Hybrid' (gậy lai) có âm tiết thứ nhất chứa nguyên âm đôi nào?",
          options: ["/aɪ/", "/eɪ/", "/oʊ/", "/aʊ/"],
          answer: "/aɪ/",
          rationale: "'Hybrid' /ˈhaɪ.brɪd/ có âm tiết đầu chứa nguyên âm đôi /aɪ/.",
          ipa: "/ˈhaɪ.brɪd/",
          audioScript: "Here is your Hybrid club."
        },
        {
          id: 85,
          question: "Cụm từ 'Tee box' (khu vực phát bóng) phát âm IPA chuẩn là gì?",
          options: ["/tiː bɑːks/", "/teɪ bɑːks/", "/tɪ bɒks/", "/tiː bɔːks/"],
          answer: "/tiː bɑːks/",
          rationale: "'Tee box' phát âm là /tiː bɑːks/.",
          ipa: "/tiː bɑːks/",
          audioScript: "Welcome to Tee box hole 1."
        },
        {
          id: 86,
          question: "Đâu là từ phát âm đúng của từ 'Flag' (cờ chỉ hố gôn)?",
          options: ["/flæɡ/", "/fleɡ/", "/flɑːɡ/", "/fleɪɡ/"],
          answer: "/flæɡ/",
          rationale: "'Flag' phát âm bằng nguyên âm mở /æ/: /flæɡ/.",
          ipa: "/flæɡ/",
          audioScript: "135 yards to the flag."
        },
        {
          id: 87,
          question: "Khi kiểm tra đủ 14 gậy trước giờ chơi, Caddie đếm gậy và thấy thiếu 1 gậy, Caddie nên báo khách như thế nào?",
          options: [
            "Excuse me Sir, there are only 13 clubs in your bag. Please check.",
            "You lost one club already!",
            "Where is your club? You forgot it.",
            "Bad bag, only 13 clubs."
          ],
          answer: "Excuse me Sir, there are only 13 clubs in your bag. Please check.",
          rationale: "Báo cáo lịch thiệp và tôn trọng: 'Excuse me Sir, there are only 13 clubs in your bag. Please check.'.",
          ipa: "/ɪkˈskjuːz miː sɜːr, ðeər ɑːr ˈoʊn.li ˌθɜːrˈtiːn klʌbz.../",
          audioScript: "Excuse me Sir, there are only 13 clubs in your bag. Please check."
        },
        {
          id: 88,
          question: "Từ 'Rough' (vùng cỏ cao bẫy) có phát âm âm cuối là gì?",
          options: ["/f/", "/ɡ/", "/k/", "/p/"],
          answer: "/f/",
          rationale: "'Rough' /rʌf/ kết thúc bằng âm vô thanh /f/.",
          ipa: "/rʌf/",
          audioScript: "The ball is in the rough."
        },
        {
          id: 89,
          question: "Từ 'Pin' (cột cờ) có nguyên âm ngắn nào?",
          options: ["/ɪ/", "/iː/", "/e/", "/æ/"],
          answer: "/ɪ/",
          rationale: "'Pin' /pɪn/ chứa nguyên âm ngắn /ɪ/.",
          ipa: "/pɪn/",
          audioScript: "Distance to the pin."
        },
        {
          id: 90,
          question: "Khi bàn giao túi gậy đã làm sạch hoàn tất cuối buổi chơi, Caddie nói câu nào chuyên nghiệp nhất?",
          options: [
            "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!",
            "Take your bag and go.",
            "Finished bag, goodbye.",
            "Your bag is heavy, pay tip now."
          ],
          answer: "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!",
          rationale: "Bàn giao chu đáo, thông báo gậy đã được lau sạch và xác minh đầy đủ.",
          ipa: "/hɪər ɪz jʊər ɡɒlf bæɡ, sɜːr. ɔːl klʌbz ɑːr kliːn.../",
          audioScript: "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!"
        }
      ]
    }
  ]
};

export default lesson1Data;
