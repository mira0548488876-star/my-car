const carsArr = [
    // electric-cars
    { 
        idCar: "111", 
        nameCAR: "טסלה מודל 3", 
        categoryCar: "electric-cars", 
        priceCar: 200000, 
        year: 2024, 
        img: "1e.webp", 
        categoryState: "new",
        sellerName: "ישראל ישראלי",
        sellerPhone: "050-1234567",
        description: "רכב שמור בקפדנות, נהג יחיד, חונה תמיד בחנייה מקורה. מגיע עם עמדת טעינה ביתית מוגדלת."
    },
    { 
        idCar: "222", 
        nameCAR: "BYD אטו 3", 
        categoryCar: "electric-cars", 
        priceCar: 220000, 
        img: "2e.webp", 
        categoryState: "new",
        sellerName: "רפי לוי",
        sellerPhone: "054-9876543",
        description: "רכב משפחתי חשמלי מרווח מאוד, מערכת מולטימדיה מתקדמת, טווח סוללה ריאלי מעולה."
    },
    { 
        idCar: "333", 
        nameCAR: "יונדאי איוניק 5", 
        categoryCar: "electric-cars", 
        priceCar: 250000, 
        img: "3e.webp", 
        categoryState: "new",
        sellerName: "דנה כהן",
        sellerPhone: "052-1112223",
        description: "עיצוב עתידני מרהיב, טעינה אולטרה-מהירה, מנוע שקט וחזק. קילומטראז' נמוך במיוחד."
    },
    { 
        idCar: "444", 
        nameCAR: "קיה EV6", 
        categoryCar: "electric-cars", 
        priceCar: 300000, 
        img: "4e.webp", 
        categoryState: "new",
        sellerName: "אלון מזרחי",
        sellerPhone: "053-4445556",
        description: "גרסת פרימיום מפוארת, מושבי עור חשמליים, מערכות בטיחות אקטיביות מהמתקדמות בשוק."
    },
    { 
        idCar: "555", 
        nameCAR: "ג'ילי גיאומטרי C", 
        categoryCar: "electric-cars", 
        priceCar: 260000, 
        img: "5e.webp", 
        categoryState: "new",
        sellerName: "מיכל אברהם",
        sellerPhone: "058-7778889",
        description: "הדגם המבוקש עם הסוללה הגדולה, חסכוני בצורה בלתי רגילה, נהג יחיד ללא תאונות."
    },
    { 
        idCar: "666", 
        nameCAR: "פורשה טייקאן", 
        categoryCar: "electric-cars", 
        priceCar: 800000, 
        img: "6e.webp", 
        categoryState: "new",
        sellerName: "יוסי קליין",
        sellerPhone: "050-6667778",
        description: "מכונית על חשמלית. ביצועי ספורט קיצוניים, חוויית נהיגה אולטימטיבית, מטופלת רק ביבואן הרשמי."
    },
    { 
        idCar: "777", 
        nameCAR: "אאודי e-tron", 
        categoryCar: "electric-cars", 
        priceCar: 500000, 
        img: "7e.webp", 
        categoryState: "new",
        sellerName: "נתי חדד",
        sellerPhone: "054-3332211",
        description: "SUV יוקרתי חשמלי מלא, חבילת אבזור מקסימלית הכוללת גג פנורמי נפתח ומערכת שמע פרימיום."
    },
    { 
        idCar: "888", 
        nameCAR: "ליפמוטור T03", 
        categoryCar: "electric-cars", 
        priceCar: 100000, 
        img: "8e.webp", 
        categoryState: "new",
        sellerName: "גיל שגיא",
        sellerPhone: "052-8889990",
        description: "רכב עירוני קומפקטי מושלם, קל לחנייה, עלויות תחזוקה אפסיות, מצוין כרכב שני בבית."
    },
    { 
        idCar: "999", 
        nameCAR: "טסלה מודל Y", 
        categoryCar: "electric-cars", 
        priceCar: 400000, 
        img: "9e.webp", 
        categoryState: "new",
        sellerName: "רוני גבאי",
        sellerPhone: "053-9998887",
        description: "רכב פנאי מרווח, תא מטען ענק מקדימה ומאחורה, נסיעה חלקה ובטוחה לכל המשפחה."
    },

    // famil's-cars
    { 
        idCar: "001", 
        nameCAR: "טויוטה קורולה היברידית", 
        categoryCar: "famil's-cars", 
        priceCar: 200000, 
        img: "1fy.png", 
        categoryState: "new",
        sellerName: "משה כהן",
        sellerPhone: "052-7654321",
        description: "גרסה היברידית חסכונית במיוחד, עבר טיפול תקופתי לפני חודש במוסך מורשה, ללא תאונות."
    },
    { 
        idCar: "002", 
        nameCAR: "יונדאי אלנטרה", 
        categoryCar: "famil's-cars", 
        priceCar: 220000, 
        img: "2fy.png", 
        categoryState: "new",
        sellerName: "איתי לוין",
        sellerPhone: "054-2223334",
        description: "עיצוב ספורט-סדאן משפחתי, מנוע היברידי יעיל, מערכת בטיחות מקיפה, נשמר בקנאות."
    },
    { 
        idCar: "003", 
        nameCAR: "סקודה אוקטביה", 
        categoryCar: "famil's-cars", 
        priceCar: 250000, 
        img: "3fy.png", 
        categoryState: "new",
        sellerName: "יעל פרץ",
        sellerPhone: "050-3334445",
        description: "תא מטען ענק ונוחות נסיעה ברמה הגבוהה ביותר. מנוע טורבו חזק וחסכוני בדלק."
    },
    { 
        idCar: "004", 
        nameCAR: "מאזדה 3 סדאן", 
        categoryCar: "famil's-cars", 
        priceCar: 300000, 
        img: "4fy.png", 
        categoryState: "new",
        sellerName: "רונן אשכנזי",
        sellerPhone: "052-5556667",
        description: "רכב ברמת גימור הגבוהה ביותר, תצוגה עילית בשמשמה, חוויית נהיגה דינמית ומהנה."
    },
    { 
        idCar: "005", 
        nameCAR: "קיה ספורטאז'", 
        categoryCar: "famil's-cars", 
        priceCar: 260000, 
        img: "5fy.png", 
        categoryState: "new",
        sellerName: "ענת שטרן",
        sellerPhone: "054-4448882",
        description: "ג'יפון משפחתי גבוה ומרווח, תנוחת ישיבה שלטת, מושלם לטיולים משפחתיים ונסיעות ארוכות."
    },
    { 
        idCar: "006", 
        nameCAR: "הונדה סיוויק", 
        categoryCar: "famil's-cars", 
        priceCar: 800000, 
        img: "6fy.png", 
        categoryState: "new",
        sellerName: "דניאל וייס",
        sellerPhone: "053-1119992",
        description: "דגם ספורט אקסקלוסיבי, אמינות יפנית מוכחת, חלקי חילוף מקוריים בלבד, צבע מטאלי מיוחד."
    },
    { 
        idCar: "007", 
        nameCAR: "פיג'ו 3008", 
        categoryCar: "famil's-cars", 
        priceCar: 500000, 
        img: "7fy.png", 
        categoryState: "new",
        sellerName: "שירן לוי",
        sellerPhone: "058-2223334",
        description: "מנוע דיזל חזק וחסכוני להפליא, עיצוב פנים יוקרתי (i-Cockpit), נוחות נסיעה אירופאית."
    },
    { 
        idCar: "008", 
        nameCAR: "שברולט ספארק", 
        categoryCar: "famil's-cars", 
        priceCar: 100000, 
        img: "8fy.png", 
        categoryState: "new",
        sellerName: "תומר ברק",
        sellerPhone: "050-4443332",
        description: "קטנה אך זריזה מאוד, מנוע 1.4 חזק יחסית לקטגוריה, שמורה היטב ללא שפשופים."
    },
    { 
        idCar: "009", 
        nameCAR: "ניסאן קשקאי", 
        categoryCar: "famil's-cars", 
        priceCar: 400000, 
        img: "9fy.png", 
        categoryState: "new",
        sellerName: "אמיר סימון",
        sellerPhone: "052-9991112",
        description: "מנוע טורבו מתקדם, מצלמות 360 מעלות היקפיות, מושבים נוחים מאוד לנסיעות ממושכות."
    },

    // fancy-cars
    { 
        idCar: "110", 
        nameCAR: "מרצדס C-Class", 
        categoryCar: "fancy-cars", 
        priceCar: 200000, 
        img: "f1.png", 
        categoryState: "new",
        sellerName: "קובי אלבז",
        sellerPhone: "054-7771112",
        description: "חוויית פרימיום גרמנית. תאורת אווירה דינמית, מערכת סאונד מטורפת, שמורה כמו באולם תצוגה."
    },
    { 
        idCar: "220", 
        nameCAR: "ב.מ.וו סדרה 3", 
        categoryCar: "fancy-cars", 
        priceCar: 220000, 
        img: "f2.png", 
        categoryState: "asNew",
        sellerName: "שלומי אזולאי",
        sellerPhone: "050-8884442",
        description: "הנעה אחורית חווייתית, התנהגות כביש ספורטיבית מושלמת, ללא תאונות או תיקוני צבע כלל."
    },
    { 
        idCar: "330", 
        nameCAR: "לקסוס IS300h", 
        categoryCar: "fancy-cars", 
        priceCar: 250000, 
        img: "f3.png", 
        categoryState: "new",
        sellerName: "מאיר שפירא",
        sellerPhone: "052-3339991",
        description: "רכב מנהלים היברידי אקסקלוסיבי, שילוב של פאר ואמינות חסרת פשרות, צריכת דלק נמוכה."
    },
    { 
        idCar: "440", 
        nameCAR: "אאודי A4 פרימיום", 
        categoryCar: "fancy-cars", 
        priceCar: 300000, 
        img: "f4.png", 
        categoryState: "asNew",
        sellerName: "ליאור חן",
        sellerPhone: "053-5552221",
        description: "לוח מחוונים וירטואלי מלא, פנסי לד מטריקס בחזית, נסיעה שקטה ומבודדת מרעשי חוץ."
    },
    { 
        idCar: "550", 
        nameCAR: "וולוו S60", 
        categoryCar: "fancy-cars", 
        priceCar: 260000, 
        img: "f5.png", 
        categoryState: "new",
        sellerName: "גיא פלדמן",
        sellerPhone: "054-6663339",
        description: "הרכב הבטוח בעולם. מושבי אורטופדיים נוחים במיוחד, מערכת שיוט אדפטיבית מתקדמת."
    },
    { 
        idCar: "660", 
        nameCAR: "קדילאק CT5", 
        categoryCar: "fancy-cars", 
        priceCar: 800000, 
        img: "f6.png", 
        categoryState: "asNew",
        sellerName: "צביקה שוורץ",
        sellerPhone: "050-1110002",
        description: "אמריקאית שרירית ומפוארת, מנוע עוצמתי, נוכחות מהפנטת על הכביש, יד ראשונה מפרטי."
    },
    { 
        idCar: "770", 
        nameCAR: "אלפא רומיאו ג'וליה", 
        categoryCar: "fancy-cars", 
        priceCar: 500000, 
        img: "f7.png", 
        categoryState: "new",
        sellerName: "מרק קוזנצוב",
        sellerPhone: "052-7773331",
        description: "עיצוב איטלקי סוער, הגה חד ומדויק כמו של מכונית מרוץ, לחובבי נהיגה אמיתיים בלבד."
    },
    { 
        idCar: "880", 
        nameCAR: "יגואר XE", 
        categoryCar: "fancy-cars", 
        priceCar: 100000, 
        img: "f8.png", 
        categoryState: "new",
        sellerName: "ארז גולן",
        sellerPhone: "053-2224441",
        description: "אריסטוקרטית אנגלית אמיתית, חומרי גלם משובחים ביותר בתוך תא הנוסעים, נסיעה מלכותית."
    },
    { 
        idCar: "990", 
        nameCAR: "ג'נסיס G70", 
        categoryCar: "fancy-cars", 
        priceCar: 100000, 
        img: "f9.png", 
        categoryState: "new",
        sellerName: "עודד קריף",
        sellerPhone: "058-9994443",
        description: "מותג היוקרה הקוריאני שכבש את העולם, רמת אבזור מקסימלית במחיר אטרקטיבי, שמור כחדש."
    },
    { 
        idCar: "101", 
        nameCAR: "אינפיניטי Q50", 
        categoryCar: "fancy-cars", 
        priceCar: 100000, 
        img: "f10.png", 
        categoryState: "new",
        sellerName: "חיים לוי",
        sellerPhone: "050-1012023",
        description: "מנוע וי-6 עוצמתי, תגובת דוושה מיידית, מערכת הגה אלקטרונית מתקדמת, נהג מבוגר ויחיד."
    },
    { 
        idCar: "102", 
        nameCAR: "קופרה פורמנטור VZ", 
        categoryCar: "fancy-cars", 
        priceCar: 100000, 
        img: "f11.png", 
        categoryState: "new",
        sellerName: "אביב אוחנה",
        sellerPhone: "054-1021024",
        description: "קרוסאובר ביצועים עצבני ויוקרתי, צבע אפור בטון מט מבוקש, תאורת לד היקפית מרהיבה."
    },
    { 
        idCar: "103", 
        nameCAR: "טסלה מודל S פלייד", 
        categoryCar: "fancy-cars", 
        priceCar: 100000, 
        img: "f12.png", 
        categoryState: "new",
        sellerName: "ניר דותן",
        sellerPhone: "052-1031035",
        description: "מעל 1000 כוחות סוס! תאוצה מ-0 ל-100 בפחות מ-2 שניות, שיא הטכנולוגיה האנושית על גלגלים."
    },
    { 
        idCar: "104", 
        nameCAR: "מזראטי גיבלי", 
        categoryCar: "fancy-cars", 
        priceCar: 400000, 
        img: "f13.png", 
        categoryState: "asNew",
        sellerName: "שרון שלום",
        sellerPhone: "053-1041046",
        description: "צליל מנוע ספורטיבי משכר שפותח בשיתוף פרארי, מושבי עור בעיצוב אישי, חוויה לחושים."
    }
];