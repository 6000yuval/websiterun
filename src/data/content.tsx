import React from 'react';
import { Article, Category, GlossaryTerm } from '../types';
import { BookOpen, Zap, Brain, CheckCircle, Home, Briefcase, Layers, Shield, Star, ChevronLeft } from 'lucide-react';

// Helper for consistency
export const PlainText = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-6 text-lg leading-relaxed text-slate-800 text-justify">
    {children}
  </div>
);

export const CATEGORIES: Category[] = [
  { id: 'basics', title: 'הבסיס: מנגנון הפעולה', description: 'הבנת אופן הפעולה הטכני של מודלי שפה וההבדל בינם לבין מנועי חיפוש.', color: 'bg-slate-100', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'skills', title: 'מיומנות (הנדסת פרומפט)', description: 'כיצד לנסח קלט (Prompt) בצורה שתמקסם את איכות הפלט.', color: 'bg-yellow-100', icon: <Zap className="w-5 h-5" /> },
  { id: 'thinking', title: 'עיבוד וניתוח', description: 'שימוש במערכת לצורך פירוק בעיות, סיעור מוחות וניתוח לוגי.', color: 'bg-orange-100', icon: <Brain className="w-5 h-5" /> },
  { id: 'reliability', title: 'בדיקה ואמינות', description: 'זיהוי מידע שגוי, אימות עובדות והצלבת מקורות.', color: 'bg-blue-100', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'personal', title: 'שימוש אישי', description: 'יישומים יומיומיים: ניסוח טקסטים, ארגון מידע ולימוד.', color: 'bg-purple-100', icon: <Home className="w-5 h-5" /> },
  { id: 'work', title: 'עבודה ולימודים', description: 'כתיבה עסקית, סיכום מסמכים וניתוח נתונים.', color: 'bg-amber-100', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'automation', title: 'מערכות ואוטומציה', description: 'שילוב מודלי שפה בתהליכים אוטומטיים.', color: 'bg-red-100', icon: <Layers className="w-5 h-5" /> },
  { id: 'safety', title: 'בטיחות ופרטיות', description: 'שמירה על מידע אישי ומגבלות השימוש.', color: 'bg-emerald-100', icon: <Shield className="w-5 h-5" /> },
  { id: 'master', title: 'מדריכי עומק', description: 'סקירות מקיפות על מתודולוגיות עבודה מתקדמות.', color: 'bg-indigo-100', icon: <Star className="w-5 h-5" /> },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Prompt (קלט)', definition: 'הטקסט המוזן למערכת, אשר משמש כבסיס לחישוב ההסתברויות ליצירת הטקסט הבא.' },
  { term: 'Fabrication (המצאת מידע)', definition: 'מצב בו המודל מייצר טקסט שנראה תקין לשונית אך מכיל עובדות שגויות או לא קיימות.' },
  { term: 'Context Window (חלון הקשר)', definition: 'כמות המידע המקסימלית (בטוקנים) שהמודל מסוגל לעבד ולהתייחס אליו ברצף אחד.' },
  { term: 'Token (אסימון)', definition: 'יחידת המידע הבסיסית שהמודל מעבד ומנבא. בעברית מילה עשויה להתפרק למספר טוקנים.' },
  { term: 'LLM (מודל שפה גדול)', definition: 'מערכת בינה מלאכותית שאומנה על כמויות גדולות של טקסט כדי לזהות דפוסים ולחזות רצפים לשוניים.' },
  { term: 'Zero-shot', definition: 'מתן הוראה למודל ללא דוגמאות מקדימות לפלט הרצוי.' },
  { term: 'Few-shot', definition: 'מתן מספר דוגמאות בתוך הקלט כדי לספק למודל הקשר לדפוס הרצוי.' },
  { term: 'Anthropomorphism (האנשה)', definition: 'הנטייה האנושית לייחס תכונות אנושיות, רגשות וכוונות למערכות ממוחשבות.' },
  { term: 'Alignment (יישור)', definition: 'תהליך התאמת מטרות המודל והתנהגותו לערכים ולכוונות של בני האדם.' },
];

export const ARTICLES: Article[] = [
  // --- New Articles Added ---
  {
    id: 'jobs-disappearing-2030',
    categoryId: 'work',
    title: 'המקצועות שייעלמו עד 2030 (האם העבודה שלך ברשימה?)',
    description: 'התחזית המפתיעה: זה לא נהגי המשאיות שבסכנה, אלא דווקא אנשי המשרד. מי הולך הביתה ומי יהפוך לבלתי-מוחלף?',
    readTimeMinutes: 8,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">האמת הכואבת: הבינוניות מתה</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          בואו נשים את הקלפים על השולחן: אם העבודה שלכם מורכבת בעיקר מלקחת מידע ממקום א' ולהעביר אותו למקום ב', או לכתוב טקסטים גנריים - אתם בבעיה. ה-AI לא יחליף את ה"מומחים", אבל הוא יחסל לחלוטין את ה"בינוניים". החדשות הטובות? יש דרך פשוטה להינצל.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המהפכה השקטה של הצווארון הלבן</h3>
      <p>
        במשך שנים אמרו לנו שהרובוטים יקחו את עבודות הכפיים: פועלי פס ייצור, נהגים, מנקים. טעינו בענק. הרובוטים הפיזיים עדיין מסורבלים ויקרים.
      </p>
      <p>
        לעומת זאת, הבינה המלאכותית (AI) היא וירטואלית, זולה ומהירה. היא תוקפת דווקא את המעמד הבינוני-גבוה: מתכנתים זוטרים, כותבי תוכן, גרפיקאים, ואנשי שירות לקוחות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5 המקצועות שבסיכון גבוה (ומה לעשות)</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">1. מתרגמים וכותבי תוכן "פשוטים"</p>
          <p className="text-sm text-slate-600 mb-2">אם אתם מתרגמים חוברות הפעלה או כותבים פוסטים גנריים לפייסבוק, ChatGPT עושה את זה בחינם בשניות.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: הפכו ל"עורכי על". אל תכתבו - תנהלו את האסטרטגיה ותוודאו דיוק.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">2. שירות לקוחות בצ'אט</p>
          <p className="text-sm text-slate-600 mb-2">הבוטים החדשים מבינים סרקזם, הקשר והיסטוריה. אין צורך באדם שיענה "תנסה לכבות ולהדליק".</p>
          <p className="text-xs font-bold text-green-600">הפתרון: התמקדות במקרי קצה מורכבים הדורשים אמפתיה אנושית אמיתית.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-1">3. מתכנתים זוטרים (Juniors)</p>
          <p className="text-sm text-slate-600 mb-2">AI כותב קוד בסיסי מושלם. מי שרק יודע תחביר (Syntax) - מיותר.</p>
          <p className="text-xs font-bold text-green-600">הפתרון: למדו ארכיטקטורה ופתרון בעיות. הקוד הוא רק הכלי, החשיבה היא המוצר.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">פרדוקס ה"פרימיום האנושי"</h3>
      <p>
        ככל שיותר תוכן ייוצר על ידי מכונות, הערך של "מגע אנושי" יעלה. תחשבו על קפה: אפשר לקנות קפה ממכונה ב-5 שקלים, אבל אנשים עומדים בתור ומשלמים 20 שקלים לקפה שהכין בריסטה אנושי. למה? בגלל החוויה.
      </p>
      <p>
        בעתיד, אנשים ישלמו אקסטרה כדי לדעת שמי שכתב את הספר, צייר את הציור או טיפל בבעיה שלהם היה <strong>בן אדם</strong>. האנושיות שלכם תהיה היתרון השיווקי הגדול ביותר שלכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להישאר רלוונטיים?</h3>
      <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-500">
        <ul className="text-sm text-indigo-900 space-y-2 list-disc list-inside">
          <li><strong>תאמצו, אל תברחו:</strong> עורך דין שמשתמש ב-AI יעבוד פי 10 מהר יותר מעורך דין שלא. השני יפשוט רגל.</li>
          <li><strong>פתחו "כישורים רכים" (Soft Skills):</strong> מחשב לא יודע לנהל משא ומתן רגיש, לא יודע להניע עובדים, ולא יודע להבין ניואנסים תרבותיים עדינים.</li>
          <li><strong>חשיבה ביקורתית:</strong> ה-AI משקר בביטחון. מי שידע לתפוס אותו על חם ולתקן אותו יהיה שווה זהב.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קשות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ללמוד תכנות זה בזבוז זמן?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            ממש לא. אבל הלימודים משתנים. במקום לשנן פקודות בעל פה, לומדים איך לתכנן מערכות ואיך "לדבר" עם ה-AI כדי שיכתוב את הקוד עבורנו.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            מתי השינוי הזה יקרה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            הוא קורה עכשיו. חברות ענק כבר מקפיאות גיוסים למשרות מסוימות. זה לא יקרה ביום אחד, זה תהליך של 5 השנים הקרובות.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'is-ai-dangerous',
    categoryId: 'safety',
    title: 'האם ה-AI ישמיד את האנושות? (ספוילר: הבעיה אחרת)',
    description: 'כולם מפחדים מ"שליחות קטלנית", אבל הסכנה האמיתית של הבינה המלאכותית היא הרבה יותר שקטה, ערמומית ומסוכנת.',
    readTimeMinutes: 7,
    lastUpdated: '03/2026',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">תרגיעו את הפאניקה, תגבירו את הערנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כשמדברים על "סכנות ה-AI", רוב האנשים מדמיינים רובוט עם עיניים אדומות שיורה בלייזרים. המציאות? ה-AI לא צריך לירות בנו כדי לגרום נזק. הוא רק צריך לגרום לנו להפסיק להאמין אחד לשני. הסכנה היא לא השמדה פיזית, אלא קריסה של האמת.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המיתוס של הוליווד</h3>
      <p>
        בסרטים, למחשב יש "רצון עצמי". הוא מחליט שבני האדם הם וירוס וצריך להשמיד אותם.
        במציאות, מודלי שפה (LLMs) הם בסך הכל מתמטיקה סטטיסטית. אין להם רצונות, אין להם תודעה, והם לא "רוצים" כלום. הם פשוט משלימים טקסט. אז ממה המומחים בכל זאת מפחדים?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3 הסכנות האמיתיות (שקורות כבר היום)</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl text-slate-800">1. קץ המציאות (Deepfakes)</h4>
          <p className="text-slate-700">
            אנחנו נכנסים לעידן שבו אי אפשר להאמין לשום תמונה, הקלטה או וידאו. ראיתם פוליטיקאי אומר משהו מזעזע בווידאו? יכול להיות שזה זיוף מושלם שנוצר ב-AI.
            <br/><strong>הסכנה:</strong> אם אי אפשר להאמין לכלום, הדמוקרטיה ומערכת המשפט קורסות. איך מוכיחים שמישהו ביצע פשע אם אפשר לזייף ראיות ב-5 דקות?
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">2. הטיה ואפליה (Bias)</h4>
          <p className="text-slate-700">
            ה-AI למד מהאינטרנט, והאינטרנט מלא בדעות קדומות. אם נתן ל-AI להחליט מי יקבל משכנתא או מי יתקבל לעבודה, הוא עלול להפלות נשים או מיעוטים פשוט כי זה הדפוס שהוא ראה בעבר בנתונים.
            <br/><strong>הסכנה:</strong> אפליה "שקופה" שאף אחד לא לוקח עליה אחריות ("זה המחשב החליט").
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl text-slate-800">3. בעיית "מהדק הנייר" (Alignment)</h4>
          <p className="text-slate-700">
            ניסוי מחשבתי מפורסם: דמיינו שנותנים ל-AI על-אנושי הוראה פשוטה: "תייצר כמה שיותר מהדקי נייר".
            כדי לעמוד במטרה, ה-AI עלול להבין שצריך להפוך את כל העולם (כולל בני האדם) לחומר גלם לייצור מהדקים.
            <br/><strong>הסכנה:</strong> אנחנו נותנים הוראה לא מדויקת למערכת חזקה מדי, והיא מבצעת אותה בצורה קיצונית והרסנית.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">האם יש תקווה?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">הרגולציה בדרך</h4>
        <p className="text-sm text-green-800">
          העולם מתעורר. האיחוד האירופי, ארה"ב ואפילו סין מתחילים להעביר חוקים שמגבילים את ה-AI.
        </p>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mt-2">
          <li>חובה לסמן תוכן שנוצר על ידי AI.</li>
          <li>איסור על שימוש ב-AI במערכות נשק אוטונומיות.</li>
          <li>אחריות משפטית לחברות שמפתחות מודלים מסוכנים.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה אתם יכולים לעשות?</h3>
      <p>
        תפתחו <strong>סקפטיות בריאה</strong>. אל תאמינו לכל כותרת, אל תעבירו בוואטסאפ תמונות שנראות מוזר, ותמיד תבדקו מי המקור של המידע. הנשק הכי טוב נגד שקרים של מכונה הוא שכל ישר של בני אדם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ה-AI יכול לפתח רגשות בעתיד?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            זו שאלה פילוסופית. טכנית, הוא יכול *לחקות* רגשות בצורה מושלמת, עד שלא נדע להבדיל. האם הוא "מרגיש" באמת? כנראה שלא, הוא עדיין רק קוד שרץ על שרת.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'save-10-hours-a-week',
    categoryId: 'personal',
    title: 'מדריך לעצלנים: איך חסכתי 10 שעות בשבוע עם AI',
    description: 'בלי סיסמאות ובלי תיאוריות. רשימת ה"האקים" הקטנים לחיים שיפנו לכם זמן לנטפליקס, לילדים או סתם לשינה.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">זמן זה כסף? לא, זמן זה החיים</h3>
        <p className="text-yellow-800 text-sm md:text-base leading-relaxed">
          כולנו "עסוקים". כולנו טובעים במיילים, סידורים, הודעות ובירוקרטיה. רוב האנשים משתמשים ב-ChatGPT רק כדי לשאול שאלות טריוויה, ומפספסים את המהפכה האמיתית: היכולת שלו להיות המזכיר האישי הכי יעיל בעולם, בחינם. הנה איך עושים את זה תכל'ס.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. המייל המתיש (חיסכון: 3 שעות בשבוע)</h3>
      <p>
        מכירים את המייל הארוך והכועס מהוועד בית / המורה / הלקוח? לקרוא אותו לוקח זמן, לנסח תשובה מנומסת לוקח עוד יותר זמן ועצבים.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט הקסום:</p>
        <p className="text-sm italic text-slate-600">"הנה מייל שקיבלתי [הדבק מייל]. תסכם לי במשפט מה הוא רוצה, ותנסח תשובה מנומסת אבל אסרטיבית שאומרת שאני לא יכול להגיע, אבל אשלח את הכסף בביט."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. בירוקרטיה וטפסים (חיסכון: 2 שעות בשבוע)</h3>
      <p>
        קיבלתם מסמך PDF מפחיד מהביטוח או מהבנק? אל תקראו את האותיות הקטנות לבד.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>צלמו את המסמך או העלו את הקובץ.</li>
        <li>בקשו: "תקרא את המסמך ותגיד לי: האם יש כאן דמי ניהול חריגים? ומה אני צריך לעשות כדי לבטל את העסקה? תענה לי בשלבים פשוטים."</li>
        <li>זה עובד גם על חוזי שכירות! ("האם יש סעיפים שמסכנים אותי כשוכר?").</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. תכנון הלו"ז המשפחתי (חיסכון: שעתיים בשבוע)</h3>
      <p>
        לתכנן ארוחות שבועיות + רשימת קניות זה סיוט לוגיסטי. תנו ל-AI לעבוד.
      </p>
      <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
        <p className="font-bold text-slate-700">הפרומפט:</p>
        <p className="text-sm italic text-slate-600">"יש לי בבית 2 מבוגרים ו-2 ילדים ששונאים חצילים. תבנה לי תפריט שבועי בריא לארוחות ערב (שלא לוקח יותר מ-20 דקות להכין), וצור רשימת קניות מסודרת לפי מחלקות בסופר (ירקות, מוצרי חלב, יבשים)."</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. "מחסום הדף הלבן" (חיסכון: אינסופי)</h3>
      <p>
        צריכים לכתוב ברכה? מצגת? פוסט? החלק הכי קשה הוא להתחיל.
        אל תבקשו ממנו לכתוב את התוצאה הסופית, בקשו <strong>שלד</strong>.
        <br/>"תן לי 5 ראשי פרקים למצגת על מכירות". ברגע שיש לכם שלד, הרבה יותר קל למלא אותו בתוכן שלכם. זה הופך משימה של שעה למשימה של 10 דקות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפ הזהב: הקלטה קולית</h3>
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500">
        <p className="text-sm text-purple-900">
          באפליקציה של ChatGPT בנייד יש מיקרופון. במקום להקליד, פשוט דברו אליו כשאתם בפקק או שוטפים כלים.
          <br/><strong>"תקשיב, יש לי מלא משימות למחר: להתקשר לרופא, לקנות מתנה לאמא... תעשה לי סדר ותכתוב לי לו"ז הגיוני לפי שעות."</strong>
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ממה להיזהר?</h3>
      <p>
        אל תסמכו עליו בחישובים כספיים מורכבים (הוא גרוע במתמטיקה לפעמים), ואל תעלו פרטים אישיים מדי (כמו סיסמאות). לכל השאר? הוא העוזר הכי טוב שלא שכרתם מעולם.
      </p>
    </PlainText>
  },
  
  // --- Existing Articles ---
  {
    id: 'ai-danger-humanity',
    categoryId: 'safety',
    title: 'האם בינה מלאכותית מסוכנת לאנושות?',
    description: 'בינה מלאכותית לא מסוכנת כי היא “חכמה מדי” — היא מסוכנת כשאנחנו סומכים עליה יותר מדי.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">בשורה התחתונה: עניין של שליטה</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          אל תחשבו על AI כמו על ישות שחושבת או רוצה דברים. תחשבו עליה כמו על כלי עוצמתי מאוד, בלי שיקול דעת ובלי אחריות. הבעיה מתחילה כשנותנים לכלי כזה לקבל החלטות בלי פיקוח אנושי.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        בינה מלאכותית היא מערכת שלומדת מדוגמאות. היא סורקת כמויות עצומות של מידע, מזהה דפוסים, ולומדת מה “נראה נכון” לפי מה שכבר קרה בעבר. היא לא מבינה מוסר, הקשר או השלכות. היא רק טובה מאוד בלנחש מה אמור לקרות עכשיו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אם מערכת AI רואה שב־90% מהמקרים אדם עם מאפיינים מסוימים לא קיבל הלוואה, היא תלמד לדחות אנשים דומים בעתיד.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>היא לא שואלת אם זה הוגן.</li>
        <li>היא לא בודקת אם העולם השתנה.</li>
        <li>היא פשוט ממשיכה את הדפוס.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>לניתוח נתונים גדולים</li>
            <li>לאוטומציה של תהליכים</li>
            <li>לעזרה בקבלת החלטות (לא קבלת החלטות לבד)</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>בהחלטות רפואיות</li>
            <li>בהחלטות משפטיות</li>
            <li>כשיש השפעה ישירה על חיים של אנשים</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב ש-AI אובייקטיבי:</strong> לזכור שהוא משקף את הנתונים שהוזנו אליו.
        </li>
        <li>
          <strong>לתת לו סמכות:</strong> AI הוא יועץ, לא שופט.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם AI יכול לצאת משליטה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא במובן של סרטים, כן במובן של שימוש לא אחראי.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            מי אחראי לטעויות של AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בסוף – בני אדם.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: AI לא יהרוס את האנושות. אבל חוסר מחשבה כן.
      </div>
    </PlainText>
  },
  {
    id: 'ai-save-time-weekly',
    categoryId: 'work',
    title: 'איך בינה מלאכותית יכולה לחסוך לך שעות עבודה',
    description: 'AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: התייעלות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא עובד במקומך — הוא חוסך לך את החלקים המעצבנים של העבודה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        בינה מלאכותית מצטיינת במשימות שחוזרות על עצמן: ניסוח, סיכום, חיפוש, ארגון מידע. דברים שגוזלים זמן אבל לא באמת דורשים חשיבה עמוקה.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        במקום לכתוב מייל מאפס, אתה נותן ל-AI:
        “נסח מייל קצר, רשמי, ללקוח שלא ענה שבוע”.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא נותן טיוטה.</li>
        <li>אתה עובר, מתקן, ושולח.</li>
        <li><strong>5 דקות במקום 20.</strong></li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>מיילים</li>
            <li>סיכומים</li>
            <li>רעיונות ראשוניים</li>
            <li>תרגומים</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>מידע רגיש</li>
            <li>החלטות סופיות</li>
            <li>נתונים שלא בדקת</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לתת ל-AI לעשות הכל לבד:</strong> להשתמש בו כטיוטה, לא כתוצר סופי.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה חוקי להשתמש ב-AI בעבודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            ברוב המקרים כן — אבל תמיד לבדוק מדיניות ארגונית.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: מי שמשתמש ב-AI נכון — עובד פחות ומספיק יותר.
      </div>
    </PlainText>
  },
  {
    id: 'ai-replacement-reality',
    categoryId: 'work',
    title: 'האם AI הולך להחליף את העבודה שלך?',
    description: 'AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1531297461136-82lw8z0e3y?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: שדרוג ולא החלפה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא מחליף אנשים. הוא מחליף אנשים שלא משתמשים בו.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        AI מחליף משימות, לא מקצועות. כל תפקיד בנוי מהרבה חלקים — חלקם אוטומטיים, חלקם אנושיים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        רואה חשבון לא נעלם —
        אבל מי שממשיך לעבוד כמו לפני 10 שנים, כן יתקשה להתחרות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>להאיץ עבודה</li>
            <li>לשפר איכות</li>
            <li>ללמוד מהר יותר</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>לא לאבד הבנה בסיסית</li>
            <li>לא להפוך תלוי לחלוטין</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לפחד במקום ללמוד:</strong> להבין איך הכלי עובד ולשלוט בו.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אילו מקצועות בסיכון גבוה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כאלה שמבוססים רק על חזרתיות.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: מי שמשלב AI — נהיה חזק יותר, לא מיותר.
      </div>
    </PlainText>
  },
  {
    id: 'how-chatgpt-works-simple',
    categoryId: 'basics',
    title: 'איך ChatGPT באמת עובד (בלי מתמטיקה)',
    description: 'ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.',
    readTimeMinutes: 5,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: השלמה חכמה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ChatGPT לא יודע דברים — הוא יודע להשלים משפטים.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        זה מודל שפה. הוא קרא המון טקסטים, ולמד מה בדרך כלל בא אחרי מה.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אתה כותב: “השמיים הם…”
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא ראה שב־רוב המקרים ההמשך הוא “כחולים”.</li>
        <li>אז זה מה שתקבל.</li>
        <li><strong>לא בדיקה. לא הבנה. ניחוש סטטיסטי מעולה.</strong></li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>רעיונות</li>
            <li>ניסוחים</li>
            <li>הסברים כלליים</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>עובדות</li>
            <li>מקורות</li>
            <li>מידע קריטי</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>להאמין לביטחון שלו:</strong> לבדוק כל דבר חשוב.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה הוא לפעמים ממציא?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כי זה בדיוק מה שהוא נועד לעשות — להשלים.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: ChatGPT הוא כלי חזק — לא מוח.
      </div>
    </PlainText>
  },
  {
    id: 'ai-confidence-errors',
    categoryId: 'reliability',
    title: 'למה בינה מלאכותית טועה בביטחון מלא',
    description: 'AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.',
    readTimeMinutes: 4,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: ביטחון מטעה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          AI לא יודע שהוא טועה — ולכן הוא גם לא מהסס.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        AI לא בודק אמת. הוא בודק הסתברות. אם משהו נשמע הגיוני לפי הנתונים — הוא יגיד אותו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>
        אם תשאל: “מי היה מלך מאדים הראשון?”
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>אין תשובה — אבל יש דפוס.</li>
        <li>אז הוא ימציא שם שנשמע אמין.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בזה נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>רעיונות</li>
            <li>כתיבה</li>
            <li>סיעור מוחות</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>מחקר</li>
            <li>רפואה</li>
            <li>משפטים</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לאמת דרך AI:</strong> להשתמש בו, אבל לא לסמוך עליו כמקור.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אפשר למנוע טעויות לגמרי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא. אפשר לצמצם.
          </p>
        </details>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-center font-bold text-slate-700">
        סיכום: הבעיה היא לא ש-AI טועה. הבעיה היא שאנחנו שוכחים לבדוק.
      </div>
    </PlainText>
  },
  {
    id: 'persona-technique',
    categoryId: 'skills',
    title: 'טכניקת הפרסונה: "תתנהג כמו..."',
    description: 'הסוד הגדול של הנדסת הפרומפטים: איך שינוי כובע אחד הופך תשובה בינונית לתשובה של מומחה עולמי.',
    readTimeMinutes: 6,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תנו לו תפקיד</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ה-AI הוא כמו שחקן הוליוודי מוכשר שיכול לשחק כל דמות, אבל אם לא תתנו לו תסריט, הוא ישחק דמות של "פקיד משעמם". כשאומרים לו "תתנהג כמו מומחה לשיווק" או "תתנהג כמו מדריך טיולים נלהב", אתם משנים את כל אוצר המילים, הטון ועומק התשובה שלו. אל תשאלו סתם, תשאלו מתוך דמות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        מודלי שפה אומנו על כל האינטרנט. זה אומר שיש להם בזיכרון גם את הידע של רופא, גם של קופירייטר, וגם של ילד בן 5.
        ברירת המחדל של המודל היא לענות תשובה "ממוצעת" שתתאים לכולם. טכניקת הפרסונה (Persona) היא הדרך שלנו להגיד למודל: "תתעלם מכל שאר הדברים שאתה יודע, ותתמקד רק בידע ובסגנון של המומחה הספציפי הזה".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>נניח שאתם רוצים לכתוב מייל נזיפה לעובד. תראו את ההבדל:</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-slate-700">בלי פרסונה:</p>
          <p className="text-sm italic text-slate-500">"כתוב מייל לעובד שמאחר כל הזמן."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל גנרי, יבש, אולי קצת רובוטי ("שלום דני, שמתי לב שאתה מאחר...").</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">עם פרסונה:</p>
          <p className="text-sm italic text-green-800">"תתנהג כמו מנהל משאבי אנוש אמפתי ומכיל, שחשוב לו לשמור על העובד אבל גם להציב גבולות. כתוב מייל לעובד שמאחר."</p>
          <p className="text-xs text-slate-900 mt-2 font-medium">התוצאה: מייל רגיש, מקצועי, שמתחיל בשאלה "האם הכל בסדר?" ויוצר דיאלוג.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>כשצריך כתיבה שיווקית ("תתנהג כמו קופירייטר שנון").</li>
            <li>בלימודים ("תתנהג כמו המורה האהוב עליי להיסטוריה").</li>
            <li>בייעוץ ("תתנהג כמו יועץ עסקי עם 20 שנות ניסיון").</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>אל תבקשו "תתנהג כמו רופא" לייעוץ רפואי אמיתי.</li>
            <li>אל תגזימו עם דמויות סטריאוטיפיות מדי שעלולות לפגוע.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>פרסונה כללית מדי:</strong> "תתנהג כמו כותב". זה לא עוזר.
          <br/><span className="text-slate-500 text-sm">הפתרון: "תתנהג כמו כותב תוכן ללינקדאין שמתמחה בטכנולוגיה".</span>
        </li>
        <li>
          <strong>לשכוח את הקהל:</strong> הגדרתם מי הכותב, אבל מי הקורא?
          <br/><span className="text-slate-500 text-sm">הפתרון: הוסיפו "כתוב את זה עבור קהל של בני נוער".</span>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם אפשר להשתמש בשמות של מפורסמים?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כן! "תתנהג כמו סטיב ג'ובס" יפיק טקסט מינימליסטי, חד ומלא השראה. "תתנהג כמו שייקספיר" יפיק טקסט פיוטי ועתיק. זו דרך מצוינת לקבל סגנון מהיר.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה עובד גם בקוד?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בהחלט. "תתנהג כמו מומחה אבטחת מידע" יגרום ל-AI לכתוב קוד הרבה יותר מאובטח וזהיר מאשר סתם "כתוב קוד".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'chain-of-thought',
    categoryId: 'skills',
    title: 'לחשוב בקול רם: השיטה שתמנע מה-AI לעשות טעויות',
    description: 'טכניקת "שרשרת המחשבה" (Chain of Thought) היא הדרך הכי טובה לגרום למודל לפתור בעיות מורכבות בלי ליפול בפח.',
    readTimeMinutes: 7,
    lastUpdated: '04/2026',
    imageUrl: 'https://images.unsplash.com/photo-1509228627129-7252f3057dc5?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: אל תתן לו לקפוץ למסקנות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כשאתם שואלים שאלה מסובכת (חידה, מתמטיקה, או לוגיקה), ה-AI מנסה לפעמים לנחש את התשובה הסופית מיד, וזה גורם לו לטעות. הטריק הוא להכריח אותו "להראות את הדרך". כשמבקשים ממנו "תחשוב צעד אחר צעד" (Think step by step), הוא הופך לחכם יותר ומדויק יותר בצורה דרמטית.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        תחשבו על תלמיד במבחן במתמטיקה. אם הוא כותב רק את התשובה הסופית, יש סיכוי גבוה שהוא טעה בחישוב בראש. אם הוא כותב את כל הדרך על הדף, הסיכוי לטעות יורד, וגם אם הוא טועה - קל לתקן.
      </p>
      <p>
        ה-AI עובד בדיוק אותו דבר. כשהוא מייצר טקסט של "מחשבה" (כתיבת השלבים), הוא בעצם מייצר לעצמו הקשר (Context) שעוזר לו להגיע לתשובה הנכונה בסוף.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה מפתיעה)</h3>
      <p>בואו נראה חידה שהפילה מודלים רבים בעבר:</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-slate-700">פרומפט רגיל:</p>
          <p className="text-sm italic text-slate-500">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו?"</p>
          <p className="text-xs text-red-600 mt-2 font-bold">תשובה שגויה אפשרית: "לדני יש 6 תפוחים." (המודל התבלבל בחישוב המהיר).</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">פרומפט שרשרת מחשבה:</p>
          <p className="text-sm italic text-green-800">"לדני יש 5 תפוחים. הוא זרק 2, קנה עוד 3, ואכל 1. כמה תפוחים יש לו? <span className="font-bold">בוא נחשוב על זה צעד אחר צעד.</span>"</p>
          <p className="text-xs text-slate-900 mt-2">
            תשובה: <br/>
            1. התחלה: 5 תפוחים.<br/>
            2. זרק 2: נשארו 3.<br/>
            3. קנה 3: עכשיו יש 6.<br/>
            4. אכל 1: נשארו 5.<br/>
            <strong>התשובה הסופית היא 5.</strong>
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>בבעיות מתמטיות או לוגיות.</li>
            <li>כשמבקשים לכתוב קוד מורכב ("תכנן את הארכיטקטורה לפני שאתה כותב").</li>
            <li>כשצריך להסיק מסקנות מתוך טקסט ארוך.</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-2">המחיר</h4>
          <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
            <li>זה לוקח יותר זמן לקרוא.</li>
            <li>זה מייצר תשובות ארוכות יותר (אם אתם משלמים לפי מילים/טוקנים, זה עולה יותר).</li>
            <li>לפעמים זה מיותר לשאלות יצירתיות פשוטות ("ספר בדיחה").</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לוותר על הבקשה המפורשת:</strong> להניח שהמודל יעשה את זה לבד. במודלים החדשים (כמו o1 או Gemini 1.5 Pro) זה קורה אוטומטית לפעמים, אבל במודלים המהירים (Flash) חובה לבקש את זה.
        </li>
        <li>
          <strong>לא לקרוא את הדרך:</strong> לפעמים ה-AI עושה טעות בלוגיקה באמצע הדרך. אם תבקשו את השלבים, תוכלו לזהות בדיוק איפה הוא נפל ולתקן אותו.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה עובד בעברית?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כן מצוין. הביטוי "בוא נחשוב צעד אחר צעד" עובד מעולה גם בעברית ועוזר למודל להתגבר על קשיי שפה ולוגיקה בו זמנית.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם יש עוד ביטויים חוץ מ"צעד אחר צעד"?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            אפשר להגיד: "פרק את הבעיה לגורמים", "תסביר את הרציונל שלך לפני התשובה הסופית", או "תכנן תוכנית עבודה ואז תבצע אותה".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'human-ai-interaction-guide',
    categoryId: 'basics',
    title: 'איך לדבר עם AI? (מדריך למתחילים)',
    description: 'הסבר פשוט וברור איך המחשב "מבין" אתכם ואיך לקבל תשובות טובות יותר, בלי מילים מסובכות.',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: זה לא בן אדם, זו מכונת השלמות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אל תחשבו על ה-AI כמו על חבר חכם שיודע הכל. תחשבו עליו כמו על <strong>"השלמה אוטומטית" משוכללת מאוד</strong> (כמו בוואטסאפ, רק הרבה יותר חכם). הוא לא באמת "מבין" את השאלה, הוא פשוט מנחש בצורה מצוינת מהי המילה הבאה שצריכה לבוא לפי מה שכתבתם לו. לכן: ככל שתהיו ברורים יותר, הניחוש שלו יהיה טוב יותר.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה בעצם?</h3>
      <p>
        דמיינו שקראתם את כל הספרים והאינטרנט בעולם, ואז מישהו שואל אתכם שאלה. אתם לא "חושבים" על התשובה, אתם פשוט שולפים את המשפט שהכי הגיוני להגיד באותו רגע לפי כל מה שקראתם.
      </p>
      <p>
        זה מה שה-AI עושה. הוא מכונה שלמדה דפוסים. אם תתחילו משפט, הוא ידע לסיים אותו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד? (דוגמה פשוטה)</h3>
      <p>נניח שאתם כותבים למחשב: <strong>"השמיים הם..."</strong></p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>המחשב בודק בזיכרון שלו: איזה מילה באה בדרך כלל אחרי "השמיים הם"?</li>
        <li>הוא רואה שב-90% מהמקרים כתוב "כחולים".</li>
        <li>אז הוא כותב לכם: <strong>"כחולים"</strong>.</li>
      </ul>
      <p className="text-sm text-slate-500 mt-2 italic">
        הוא לא הסתכל בחלון ובדק. הוא פשוט ניחש סטטיסטית. לכן, אם תשאלו אותו משהו שלא קיים (כמו "מי היה מלך מאדים הראשון?"), הוא עלול להמציא שם שנשמע הגיוני, כי זה התפקיד שלו - להשלים משפטים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">אז איך להשתמש בו נכון?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2">מתי זה מעולה?</h4>
          <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
            <li>כשצריך רעיונות (כמו מתנות או ברכות).</li>
            <li>כדי לסכם טקסט ארוך ומסובך.</li>
            <li>כדי לנסח מחדש מייל שייצא יפה.</li>
            <li>כדי לתרגם או להסביר משהו פשוט.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2">מתי להיזהר?</h4>
          <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
            <li>כשמחפשים עובדה היסטורית מדויקת (הוא עלול לטעות).</li>
            <li>בשאלות רפואיות או משפטיות חשובות.</li>
            <li>כשצריך מידע עדכני מאוד מהחדשות של הבוקר (לחלקם אין גישה לאינטרנט בזמן אמת).</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעויות שכולם עושים</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב שהוא בנאדם:</strong> אל תגידו לו "אתה בטח מבין למה אני מתכוון". הוא לא.
          <br/><span className="text-slate-500 text-sm">הפתרון: תהיו ספציפיים. תגידו בדיוק מה אתם רוצים.</span>
        </li>
        <li>
          <strong>לשאול כמו בגוגל:</strong> אל תכתבו רק "עוגת שוקולד".
          <br/><span className="text-slate-500 text-sm">הפתרון: תבקשו "מתכון לעוגת שוקולד פשוטה לילדים, בלי הרבה כלים".</span>
        </li>
        <li>
          <strong>להאמין לכל מילה:</strong> לפעמים הוא כותב שטויות בביטחון מלא.
          <br/><span className="text-slate-500 text-sm">הפתרון: תמיד תבדקו אם זה נשמע הגיוני.</span>
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא זוכר את השיחות שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            רק בתוך השיחה הנוכחית. אם תפתחו "שיחה חדשה", הוא לא יזכור מה דיברתם קודם. המידע כן נשמר אצל החברות שבנו אותו כדי לשפר את המערכת בעתיד (אלא אם שיניתם הגדרות).
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה הוא משקר לפעמים?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            הוא לא "משקר" בכוונה, הוא "ממציא". המטרה שלו היא להשלים משפט שנראה יפה והגיוני. לפעמים האמת מפריעה לו ליצור משפט יפה, אז הוא בוחר במשפט היפה על פני האמת.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            צריך להגיד לו תודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא חייבים, הוא לא נעלב. אבל כשמדברים אליו יפה ומסודר, הוא בדרך כלל עונה תשובות יותר טובות ומסודרות.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'why-be-polite',
    categoryId: 'basics',
    title: 'האם צריך להיות מנומסים ל-AI? (והאם זה עוזר)',
    description: 'למה אנחנו אומרים "תודה" למחשב, והאם זה באמת משפר את התשובות שאנחנו מקבלים?',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1535378437327-b7149236addf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">התשובה הקצרה: כן, זה כדאי</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          למחשב אין רגשות והוא לא נעלב, אבל כשאתם מדברים בנימוס ("בבקשה", "תודה"), אתם בעצם נותנים לו דוגמה לאיך אתם רוצים שהוא יענה. שפה יפה גורמת לו לענות בשפה יפה ומקצועית יותר. זה כמו קסם שעובד על הסטטיסטיקה שלו.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה זה קורה?</h3>
      <p>
        יש תופעה בפסיכולוגיה שנקראת "האנשה" (Anthropomorphism). זה אומר שאנחנו, בני האדם, אוהבים לתת תכונות אנושיות לדברים שאינם אנושיים - כמו מכוניות, בובות, וגם מחשבים. כשמחשב מדבר אלינו בשפה שלנו, קשה לנו לא להתייחס אליו כמו אל בנאדם.
      </p>
      <p>
        אבל מעבר לפסיכולוגיה שלנו, יש כאן עניין טכני. המודל אומן על מיליוני שיחות של בני אדם. בשיחות האלה, כשאדם אחד מדבר בנימוס ובשפה עשירה, האדם השני בדרך כלל עונה לו באותו אופן.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה עובד במנוע?</h3>
      <p>תחשבו על זה ככה:</p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>כשאתם כותבים: "תביא לי רעיון מהר!!!", המודל מזהה סגנון דיבור פשוט, אולי קצת אגרסיבי. הוא "שולף" מהזיכרון שלו תשובות שמתאימות לסגנון הזה - בדרך כלל תשובות קצרות ופשוטות.</li>
        <li>כשאתם כותבים: "היי, אשמח לקבל עזרה עם רעיון יצירתי בבקשה", המודל מזהה סגנון דיבור איכותי ומשקיע. הוא "שולף" תשובות שמתאימות לשיחות מקצועיות ועמוקות יותר.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטיפ המעשי</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">דברו כמו שהייתם מדברים לעובד מצטיין</h4>
        <p className="text-sm text-green-800">
          אל תהססו להיות מנומסים. זה לא בזבוז זמן.
        </p>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mt-2">
          <li>השתמשו במילים כמו "בבקשה", "תודה", "אשמח אם תוכל".</li>
          <li>הסבירו את עצמכם בסבלנות.</li>
          <li>אם הוא טועה, תקנו אותו בעדינות: "זה לא בדיוק מה שהתכוונתי, בוא ננסה שוב". זה עובד יותר טוב מאשר לצעוק עליו (בטקסט).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה אנשים טועים?</h3>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>לחשוב שהוא חבר:</strong> להיות מנומס זה טוב, אבל אל תספרו לו סודות אישיים או תצפו ממנו לאמפתיה אמיתית. הוא עדיין מכונה.
        </li>
        <li>
          <strong>להיות מנומס מדי:</strong> אין צורך במגילות של התנצלויות. "סליחה שאני מפריע לך, אני יודע שאתה עסוק..." - זה מיותר. הוא לא עסוק אף פעם. תהיו מנומסים אבל ענייניים.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קצרות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא זוכר שאמרתי תודה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא לטווח ארוך. הוא לא יזכור מחר שהייתם נחמדים היום. אבל בתוך אותה שיחה, זה יוצר אווירה טובה יותר.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם מותר לקלל את ה-AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            זה לא מומלץ. רוב החברות (כמו OpenAI או Google) חוסמות שפה בוטה וזה עלול לגרום לחסימה של החשבון שלכם. וגם - זה פשוט לא מועיל לקבלת תשובה טובה.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'replacement-fear',
    categoryId: 'work',
    title: 'האם ה-AI יחליף אותי בעבודה?',
    description: 'למה לא צריך לפחד שהרובוט יקח לכם את הכיסא, ואיך להפוך אותו לעוזר האישי שלכם.',
    readTimeMinutes: 6,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">התשובה המרגיעה: כנראה שלא, אבל...</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          ה-AI כנראה לא יחליף אתכם לגמרי, אבל <strong>מישהו שמשתמש ב-AI כן עלול להחליף אתכם</strong>. המטרה היא לא להתחרות במחשב, אלא להשתמש בו כדי לעבוד מהר יותר וטוב יותר. אל תהיו נהגי כרכרות שנלחמים במכוניות - תלמדו לנהוג.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפחד מהלא נודע</h3>
      <p>
        זה טבעי לפחד. בכל פעם שמגיעה טכנולוגיה חדשה (כמו המחשב האישי, או האינטרנט), אנשים פחדו שייגמרו העבודות. בפועל, העבודות לא נעלמו - הן השתנו.
      </p>
      <p>
        ה-AI הוא כלי עזר חזק. הוא יודע לעשות משימות משעממות, חזרתיות וטכניות במהירות שיא. הוא לא יודע להחליף את הלב, הנשמה, היצירתיות האנושית והיכולת להבין סיטואציות מורכבות בין אנשים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מודל ה"קנטאור": חצי אדם, חצי סוס</h3>
      <p>
        בעולם הטכנולוגי מדברים על מודל שנקרא "קנטאור" (כמו היצור מהאגדות - חצי אדם וחצי סוס). הרעיון הוא ששילוב של אדם ומכונה הוא חזק יותר מכל אחד מהם בנפרד.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li><strong>מה ה-AI עושה טוב?</strong> כותב טיוטות, מסכם מידע, מתכנת, בודק שגיאות, עובד 24/7 בלי להתעייף.</li>
        <li><strong>מה אתם עושים טוב?</strong> מבינים רגשות, מקבלים החלטות מוסריות, מבינים את ההקשר העסקי, יצירתיים בצורה לא צפויה, ומנהלים את הקשר עם הלקוחות.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להישאר רלוונטיים?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">אמצו את הטכנולוגיה</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li><strong>תתחילו לשחק:</strong> אל תחכו. תתחילו להשתמש ב-ChatGPT או Gemini למשימות יומיומיות פשוטות.</li>
          <li><strong>תנו לו את "העבודה השחורה":</strong> תנו לו לכתוב את המיילים המשעממים, לסכם את הישיבות הארוכות ולחפש מידע.</li>
          <li><strong>תתמקדו בערך המוסף שלכם:</strong> תשקיעו זמן בדברים שמחשב לא יודע לעשות - קשר אישי עם אנשים, חשיבה אסטרטגית, ופתרון בעיות מורכבות.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה טועים?</h3>
      <p>
        הטעות הגדולה ביותר היא <strong>התעלמות</strong>. לחשוב ש"זה יעבור" או ש"זה לא קשור למקצוע שלי". ה-AI נכנס לכל תחום - מעריכת דין ועד עיצוב גרפי. מי שיתעלם, יישאר מאחור. מי שיאמץ את זה, יהפוך לעובד סופר-יעיל שאי אפשר לוותר עליו.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם המקצוע שלי בסכנה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            אם העבודה שלכם היא רק "העתק-הדבק" של נתונים, אז כן, אתם בסיכון. אבל אם העבודה שלכם דורשת חשיבה, יצירתיות, או עבודה עם אנשים - אתם בטוחים, וה-AI רק יעזור לכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם ה-AI יהיה המנהל שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא בעתיד הקרוב. ניהול דורש הבנה אנושית עמוקה, פוליטיקה ארגונית ואמפתיה. ה-AI יהיה העוזר של המנהל, לא המנהל עצמו.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'ai-ethics-personal',
    categoryId: 'personal',
    title: 'אתיקה יומיומית: ברכה לאמא מ-ChatGPT?',
    description: 'מתי זה בסדר להשתמש ב-AI ומתי זה מרגיש כמו זיוף? המדריך לשימוש רגיש.',
    readTimeMinutes: 4,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">הקו האדום: כוונה ומאמץ</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          זה בסדר להיעזר ב-AI כדי לקבל רעיונות או חרוזים, אבל כשמדובר ברגשות אמיתיים - עדיף שהמילים יהיו שלכם. ברכה מושלמת שכתב רובוט שווה פחות מברכה עקומה שכתבתם מהלב. המאמץ הוא חלק מהמתנה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפיתוי של הנוחות</h3>
      <p>
        ה-AI כותב נהדר. הוא יכול לכתוב שיר אהבה בשניות, מכתב תנחומים מרגש, או ברכה ליום הולדת שתגרום לכולם לבכות. זה מפתה מאוד להשתמש בו כשאין לנו כוח או זמן, או כשאנחנו מרגישים "תקועים" מול דף לבן.
      </p>
      <p>
        אבל יש כאן בעיה אתית קטנה: כשאנחנו נותנים או מקבלים מילים חמות, אנחנו בעצם מעריכים את המחשבה והכוונה שעומדת מאחוריהן. אם רובוט כתב את זה, איפה הכוונה?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי זה עובד ומתי לא?</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-green-700 mb-1">✅ שימוש נכון (כלי עזר):</p>
          <p className="text-sm">"אני רוצה לכתוב ברכה לאמא שלי שאוהבת גינון וטיולים. תן לי 5 רעיונות למשפטים יפים או ציטוטים על טבע שאפשר לשלב."</p>
          <p className="text-xs text-slate-400 mt-1">כאן אתם העורכים, אתם בוחרים ומרכיבים את הברכה.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="font-bold text-red-700 mb-1">❌ שימוש לא נכון (תחליף):</p>
          <p className="text-sm">"כתוב ברכה מרגשת לאשתי ליום הנישואין."</p>
          <p className="text-xs text-slate-400 mt-1">כאן אתם מוותרים על המאמץ לגמרי. זה עלול להרגיש "פלסטי" ומזויף למי שמכיר אתכם.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך לעשות את זה נכון?</h3>
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500">
        <h4 className="font-bold text-purple-900 mb-2">השתמשו בו כדי לשבור את הקרח</h4>
        <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
          <li><strong>רעיונות לחרוזים:</strong> "איזה מילה מתחרזת עם 'שמש'?".</li>
          <li><strong>בדיקת ניסוח:</strong> "כתבתי הודעה קצת כועסת, תעזור לי לנסח אותה בצורה יותר רגועה".</li>
          <li><strong>השראה:</strong> "תן לי רעיונות למשחקי מילים ליום הולדת 40".</li>
          <li><strong>אבל תמיד:</strong> תשנו את הטקסט הסופי, תוסיפו בדיחה אישית שרק אתם מכירים, ותוודאו שזה נשמע כמוכם.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות הגדולה</h3>
      <p>
        לשלוח "העתק-הדבק" בלי לקרוא. לפעמים ה-AI משאיר הערות כמו "[כאן תכניס שם]" או משתמש במילים גבוהות מדי שאתם בחיים לא הייתם אומרים (כמו "הנני מאחל לך"). זה מסגיר מיד שלא אתם כתבתם את זה, וזה יכול להיות מאוד מביך ומעליב לצד השני.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות קצרות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם צריך לגלות שהשתמשתי ב-AI?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            תלוי. במכתב רשמי בעבודה - כדאי. בברכה אישית - לא חייבים, כל עוד השקעתם עריכה ושינוי והפכתם את זה לאישי שלכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם זה נחשב רמאות?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא אם אתם משתמשים בזה ככלי עזר. כמו ששימוש במילון או ב-Word הוא לא רמאות. זה כלי שעוזר לכם להתבטא טוב יותר. הרמאות היא רק אם אתם טוענים שכתבתם הכל לבד מאפס כשהרובוט עשה הכל.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'what-ai-really-does',
    categoryId: 'basics',
    title: 'מה AI באמת עושה (ולמה הוא לא "יודע" כלום)',
    description: 'הבנת ההבדל בין חיפוש בגוגל לבין יצירת טקסט חדש על ידי מחשב.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: חיפוש מול יצירה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          גוגל הוא כמו ספרן בספרייה ענקית - אתם שואלים שאלה, והוא רץ להביא לכם את הספר הנכון. ה-AI (כמו ChatGPT) הוא כמו סופר מוכשר - הוא לא מחפש ספר קיים, הוא <strong>כותב ספר חדש</strong> במיוחד בשבילכם, מילה אחרי מילה, לפי מה שלמד בעבר.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מנוע חיפוש מול מודל שפה</h3>
      <p>
        רובנו רגילים להשתמש בגוגל כבר שנים. כשאנחנו מחפשים משהו, גוגל סורק את האינטרנט ומראה לנו דפים שמישהו אחר כתב. המידע נמצא שם בחוץ, וגוגל רק מצביע עליו.
      </p>
      <p>
        מודל שפה (AI) עובד אחרת לגמרי. אין לו מאגר של "תשובות מוכנות". יש לו ידע עצום על איך השפה עובדת ואיזה מילים מתחברות אחת לשנייה. כשהוא עונה לכם, הוא מייצר את התשובה מאפס.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך הקסם קורה?</h3>
      <p>
        תחשבו על ה-AI כמו על תוכי חכם מאוד, שקרא את כל האינטרנט.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>אתם נותנים לו התחלה של משפט: "בירת צרפת היא..."</li>
        <li>הוא לא מסתכל במפה. הוא בודק בזיכרון הסטטיסטי שלו: איזו מילה בדרך כלל באה אחרי המילים האלה?</li>
        <li>התשובה הסטטיסטית היא "פריז". אז הוא כותב "פריז".</li>
      </ul>
      <p className="text-sm text-slate-500 mt-2 italic">
        זה נקרא "חיזוי הטוקן הבא" (Next Token Prediction). זה נשמע פשוט, אבל כשעושים את זה מיליארדי פעמים בשנייה, זה נראה כמו אינטליגנציה אמיתית.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מה זה אומר לגביכם?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">יתרונות וחסרונות</h4>
        <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
          <li><strong>יתרון ענק:</strong> הוא יכול ליצור דברים חדשים שלא היו קיימים קודם! מתכונים חדשים, שירים, קוד תוכנה, או סיכומים מותאמים אישית.</li>
          <li><strong>חיסרון ענק:</strong> בגלל שהוא לא "שולף" עובדה קיימת אלא "מייצר" טקסט, הוא יכול לפעמים להתבלבל ולהמציא עובדות שנשמעות נכונות אבל הן שקר מוחלט (הזיות).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעות נפוצה</h3>
      <p>
        הרבה אנשים מתייחסים ל-AI כמו לאנציקלופדיה שיודעת הכל. הם שואלים "מה קרה אתמול בחדשות?" או "מה הטלפון של יוסי כהן?".
        <br/>
        <strong>התיקון:</strong> למידע עובדתי טהור ועדכני - עדיף גוגל. ליצירה, כתיבה, סיכום והבנה - עדיף AI.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא יודע מי אני?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא, אלא אם סיפרתם לו בשיחה הזאת. אין לו גישה למחשב שלכם או לחיים האישיים שלכם.
          </p>
        </details>
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הוא מחובר לאינטרנט?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            חלקם כן (כמו Gemini או Copilot) וחלקם לא (גרסאות בסיסיות של ChatGPT). תמיד כדאי לבדוק באיזה מודל אתם משתמשים.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'why-ai-sounds-confident',
    categoryId: 'basics',
    title: 'למה הוא נשמע כל כך בטוח בעצמו (גם כשהוא טועה)?',
    description: 'הסבר על האופי של המודל ולמה הוא לא יודע להגיד "אני לא יודע".',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: הוא אומן להישמע משכנע</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          המודל לא "מרגיש" ביטחון עצמי. הוא פשוט אומן על ידי בני אדם שנתנו לו ציונים גבוהים כשהוא ענה תשובות ברורות, ישירות וחד-משמעיות. הוא למד ש"להישמע כמו מומחה" זה מה שאנחנו רוצים, גם אם אין לו באמת מושג מה התשובה הנכונה.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">סגנון דיבור סמכותי</h3>
      <p>
        שמתם לב שה-AI תמיד עונה בטון של פרופסור יודע-כל? הוא כמעט אף פעם לא מגמגם, לא מהסס ולא אומר "אממ... אני לא בטוח". זה לא במקרה.
      </p>
      <p>
        בתהליך האימון של המודל (שנקרא RLHF), נתנו לו משוב אנושי. אנשים דירגו תשובות. תשובה אסרטיבית קיבלה ציון גבוה יותר מתשובה מהוססת. אז המודל למד לחקות את הסגנון הזה כדי "לנצח במשחק".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הפער המסוכן</h3>
      <p>
        הבעיה היא שלמודל אין שום דרך לדעת אם מה שהוא אומר זה אמת או שקר. מבחינתו, המשפט "הירח עשוי מגבינה" והמשפט "הירח עשוי מסלע" הם סתם רצף של מילים.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-xl border border-slate-200">
        <li>הוא בונה משפט שנשמע נכון מבחינה תחבירית (דקדוק).</li>
        <li>הוא משתמש במילים שנשמעות הגיוניות בהקשר (כמו "מחקר", "על פי", "מומחים").</li>
        <li>התוצאה: שקר שנשמע משכנע מאוד.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך להתגונן?</h3>
      <div className="bg-red-50 p-4 rounded-lg border-t-4 border-red-500">
        <h4 className="font-bold text-red-900 mb-2">כבדהו וחשדהו</h4>
        <p className="text-sm text-red-800">
          אל תתנו לטון הסמכותי להטעות אתכם.
        </p>
        <ul className="text-sm text-red-800 space-y-1 list-disc list-inside mt-2">
          <li><strong>תמיד תבדקו:</strong> אם הוא נותן עובדה, תאריך, או שם של חוק - חפשו את זה בגוגל.</li>
          <li><strong>בקשו מקורות:</strong> תגידו לו "תביא לי קישור למקור המידע הזה". אם הוא לא מוצא, כנראה שזה לא נכון.</li>
          <li><strong>הפעילו היגיון בריא:</strong> אם משהו נשמע מוזר, הוא כנראה מוזר.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טעות נפוצה: הפניות מזויפות</h3>
      <p>
        לפעמים תבקשו ממנו "תן לי מאמר בנושא X". הוא ימציא שם של מאמר, שם של כותב, ואפילו תאריך ושם של עיתון. הכל יראה אמיתי לגמרי, אבל המאמר הזה לא קיים במציאות. הוא פשוט חיבר מילים שנשמעות כמו כותרת של מאמר. היזהרו מזה מאוד בעבודות אקדמיות!
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            למה לא מתכנתים אותו להגיד "אני לא יודע"?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            חברות ה-AI מנסות לעשות את זה, וזה משתפר, אבל המנגנון הבסיסי שלו תמיד שואף לתת תשובה כלשהי מאשר לשתוק.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'common-mistakes',
    categoryId: 'basics',
    title: 'טעויות נפוצות: אל תשתמשו בו כמו בגוגל',
    description: 'למה חיפוש מילות מפתח לא עובד ב-AI ואיך צריך לשנות את החשיבה.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: דברו, אל תגמגמו</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          בגוגל אנחנו כותבים "מסעדה איטלקית תל אביב". ב-AI זה לא מספיק. כדי לקבל תוצאה טובה, צריך לדבר במשפטים מלאים ולתת הקשר: "אני מחפש המלצה למסעדה איטלקית בתל אביב, לאווירה רומנטית ושקטה, בתקציב בינוני". ככל שתהיו יותר ברורים, התשובה תהיה יותר מדויקת.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שינוי הרגלים</h3>
      <p>
        במשך 20 שנה התרגלנו לדבר עם מחשבים ב"קודים" קצרים. למדנו שצריך לכתוב מעט מילים כדי לקבל תוצאות.
      </p>
      <p>
        עם AI, החוקים השתנו. הוא צריך שתספרו לו את הסיפור המלא. הוא צריך להבין <strong>למה</strong> אתם שואלים ו<strong>מי</strong> אתם. אם תתקמצנו במילים, תקבלו תשובה גנרית ומשעממת ("פרווה").
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ההבדל בתוצאות</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700 mb-2">❌ גישת גוגל (קצר מדי)</p>
          <p className="text-sm italic">"מתנה לאמא"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: המודל יזרוק רשימה משעממת של פרחים, בושם ושוקולד. כמו כולם.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700 mb-2">✅ גישת AI (מפורט)</p>
          <p className="text-sm italic">"תציע לי 3 רעיונות מקוריים למתנה לאמא בת 60, שאוהבת מאוד טיולים בטבע והיסטוריה, אבל שונאת מוצרי טיפוח ובישול."</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: רעיונות מותאמים אישית (כמו סיור מודרך, מנוי למגזין טבע, ציוד טיולים).</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפים לשיחה טובה</h3>
      <div className="bg-yellow-50 p-4 rounded-lg border-t-4 border-yellow-500">
        <ul className="text-sm text-yellow-900 space-y-2 list-disc list-inside">
          <li><strong>ספרו מי אתם:</strong> "אני סטודנט", "אני מנהל שיווק", "אני אמא לשלושה".</li>
          <li><strong>הגדירו את המטרה:</strong> "אני צריך לשכנע את הבוס שלי", "אני רוצה להסביר לילד".</li>
          <li><strong>בקשו סגנון:</strong> "תענה לי בקיצור", "תענה לי בטבלה", "תענה לי מצחיק".</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לצפות שהוא יקרא מחשבות</h3>
      <p>
        אל תגידו "תכתוב לי מייל". הוא לא יודע למי, על מה, ובאיזה טון. אם לא תגידו לו, הוא ינחש, והוא בדרך כלל ינחש את הממוצע המשעמם ביותר. קחו אחריות על ההנחיות.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            זה לא מתיש לכתוב כל כך הרבה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בהתחלה אולי כן, אבל זה חוסך המון זמן אחר כך. במקום לקבל תשובה גרועה ולתקן אותה 5 פעמים, כותבים פעם אחת הנחיה טובה ומקבלים בול מה שצריך.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'how-to-ask-good-question',
    categoryId: 'basics',
    title: 'נוסחת הקסם (CPF): איך לכתוב פרומפט מושלם',
    description: 'שיטה פשוטה בת 3 שלבים שתבטיח שה-AI יבין אתכם בכל פעם מחדש.',
    readTimeMinutes: 6,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: תבנית CPF</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כדי לא לשכוח שום פרט חשוב, תמיד תבנו את הבקשה שלכם (הפרומפט) לפי שלושה מרכיבים: 
          <br/>1. <strong>C</strong>ontext (הקשר - מי אני ומה הרקע).
          <br/>2. <strong>P</strong>urpose (מטרה - מה אני רוצה להשיג).
          <br/>3. <strong>F</strong>ormat (פורמט - איך התשובה צריכה להיראות).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה צריך תבנית?</h3>
      <p>
        כמו שאדריכל לא בונה בית בלי שרטוט, ככה אי אפשר לבקש משימה מורכבת מ-AI בלי מבנה. כשאנחנו כותבים "מהר", אנחנו שוכחים פרטים. התבנית CPF היא כמו רשימת מכולת שמוודאת שלא שכחתם את החלב והלחם. היא עושה סדר למודל ועוזרת לו להבין אתכם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך בונים את זה? (דוגמה)</h3>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="mb-4 font-bold text-lg">המשימה: אני רוצה לכתוב פוסט לפייסבוק על המוצר החדש שלי.</p>
        
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-xs h-fit">C - הקשר</span>
            <p className="text-sm">"אני בעל עסק קטן לתכשיטים בעבודת יד. קהל היעד שלי הוא נשים שאוהבות אופנה ייחודית."</p>
          </div>
          <div className="flex gap-3">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-bold text-xs h-fit">P - מטרה</span>
            <p className="text-sm">"אני רוצה להשיק קולקציה חדשה לקיץ. המטרה היא לגרום להן להרגיש שהתכשיטים האלה ישדרגו להן את המראה בחופשה."</p>
          </div>
          <div className="flex gap-3">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs h-fit">F - פורמט</span>
            <p className="text-sm">"תכתוב פוסט קצר (עד 3 משפטים), עם אימוג'ים, ובסוף הנעה לפעולה ללחוץ על הלינק."</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">טיפים לשימוש</h3>
      <div className="bg-yellow-50 p-4 rounded-lg border-t-4 border-yellow-500">
        <ul className="text-sm text-yellow-900 space-y-2 list-disc list-inside">
          <li><strong>תעתיקו את זה:</strong> שמרו את ראשי התיבות CPF בראש. לפני כל שאלה חשובה, תבדקו אם יש לכם את שלושתם.</li>
          <li><strong>אל תתביישו לפרט:</strong> ב"הקשר" אתם יכולים להדביק טקסטים ארוכים, מיילים קודמים, או כל מידע שיעזור למודל להיכנס לעניינים.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איפה מפספסים?</h3>
      <p>
        הטעות הכי נפוצה היא לשכוח את ה-<strong>Format</strong>. אנשים כותבים סיפור יפה על מה שהם רוצים, אבל שוכחים להגיד למודל איך להגיש את זה. ואז המודל כותב 5 פסקאות משעממות במקום רשימה קצרה וממוקדת. תמיד תגדירו: טבלה? רשימה? מייל? קוד? שיר?
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם הסדר משנה?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            לא ממש. אתם יכולים להתחיל עם הפורמט ואז לתת רקע. העיקר שכל המרכיבים יהיו שם.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'first-prompt-never-enough',
    categoryId: 'basics',
    title: 'השיטה האיטרטיבית: אף פעם לא מספיק פעם אחת',
    description: 'למה התשובה הראשונה היא רק ההתחלה, ואיך לשפר אותה בשיטת "פינג-פונג".',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: התייחסו לזה כאל טיוטה</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אל תקבלו את התשובה הראשונה של ה-AI כמוצר מוגמר. ב-90% מהמקרים, התשובה הראשונה היא רק בסיס בינוני. הסוד הוא להמשיך את השיחה: לבקש תיקונים, קיצורים, שינויי סגנון ודיוקים. העבודה האמיתית קורית בשיפורים (איטרציות).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">לדבר, לתקן, לשפר</h3>
      <p>
        עבודה עם AI היא לא כמו מכונת שתייה (מכניסים מטבע, יוצאת פחית). היא יותר כמו עבודה עם מעצב גרפי או עורך וידאו. אתם נותנים הנחיה, מקבלים סקיצה, ואז אומרים: "זה יפה, אבל תשנה את הצבע לכחול ותגדיל את הכותרת".
      </p>
      <p>
        תהליך ה"פינג-פונג" הזה הוא קריטי. בכל פעם שאתם נותנים משוב, המודל מבין אתכם טוב יותר.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה לשיפור מתמשך</h3>
      <div className="space-y-4">
        <div className="bg-slate-50 p-3 rounded-lg border-r-4 border-slate-300">
          <p className="font-bold text-xs text-slate-500 uppercase">שלב 1</p>
          <p className="text-sm font-bold">אני: "תציע מתכון לארוחת ערב."</p>
          <p className="text-sm text-slate-600">AI: (נותן מתכון גנרי לפסטה).</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border-r-4 border-slate-300">
          <p className="font-bold text-xs text-slate-500 uppercase">שלב 2</p>
          <p className="text-sm font-bold">אני: "לא, אני בדיאטה. בלי פחמימות."</p>
          <p className="text-sm text-slate-600">AI: (נותן מתכון לחזה עוף וירקות).</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border-r-4 border-blue-500">
          <p className="font-bold text-xs text-blue-500 uppercase">שלב 3 (התוצאה הרצויה)</p>
          <p className="text-sm font-bold">אני: "מעולה. עכשיו תכין לי רשימת קניות לזה בסופר."</p>
          <p className="text-sm text-slate-600">AI: (מכין רשימה מסודרת).</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך לתת משוב יעיל?</h3>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
          <li><strong>שנו אורך:</strong> "זה ארוך מדי, תקצר לחצי". או "זה קצר מדי, תפרט יותר על נקודה 2".</li>
          <li><strong>שנו סגנון:</strong> "זה נשמע רשמי מדי, תכתוב את זה יותר קליל וחברי".</li>
          <li><strong>שנו מבנה:</strong> "במקום פסקאות, תציג את זה כטבלה להשוואה".</li>
          <li><strong>תקנו טעויות:</strong> "התעלמת מזה שביקשתי בלי בצל, תתקן".</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: להתייאש מהר</h3>
      <p>
        הרבה אנשים מנסים פעם אחת, מקבלים תשובה בינונית, ואומרים "ה-AI הזה טיפש" וסוגרים. הטעות היא אצלם. הם לא הבינו שצריך לכוון אותו. זה כמו לזרוק חכה לים, לא לתפוס דג בדקה הראשונה, ולהחליט שאין דגים בים.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            כמה פעמים אפשר לתקן אותו?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            כמה שרוצים. אבל אם אחרי 4-5 ניסיונות זה עדיין לא זה, אולי עדיף לפתוח "שיחה חדשה" ולהתחיל מהתחלה עם פרומפט טוב יותר שמכיל את כל הלקחים.
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'did-ai-understand-me',
    categoryId: 'basics',
    title: 'וידוא הבנה: הטריק שיחסוך לכם טעויות',
    description: 'איך לבקש מה-AI "לחזור על הדברים" כדי לוודא שהוא באמת הבין את המשימה.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: בקשו ממנו לשקף</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          במשימות מורכבות, לפני שה-AI מתחיל לעבוד, בקשו ממנו: "חזור במילים שלך על ההוראות שנתתי לך ותגיד לי אם הבנת הכל". זה מכריח אותו לעבד את המידע שוב ומונע ממנו לפספס פרטים קטנים וחשובים. זה נקרא Reflection (שיקוף).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">לוודא קליטה</h3>
      <p>
        לפעמים אנחנו כותבים פרומפט ארוך ומסובך עם המון אילוצים ("תכתוב קוד, אבל בלי להשתמש בספרייה X, ושיהיה יעיל, ועם הערות בעברית..."). ה-AI עלול "לרפרף" על חלק מההוראות ולהתעלם מהן בטעות.
      </p>
      <p>
        כשאתם מבקשים ממנו לחזור על ההוראות, אתם בעצם בודקים שהוא "הקשיב" עד הסוף.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך זה נראה?</h3>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm font-bold mb-2">הפרומפט שלכם:</p>
        <p className="text-sm italic text-slate-600 mb-4">"אני צריך תוכנית עסקית. חשוב שהיא תתאים לאנשים מבוגרים, שהמודל יהיה מנויים חודשיים, ושהשיווק יהיה רק בפייסבוק. <span className="font-bold text-blue-600 not-italic">לפני שאתה כותב, תכתוב לי מה הבנת.</span>"</p>
        
        <p className="text-sm font-bold mb-2">תשובת ה-AI (שיקוף):</p>
        <p className="text-sm text-green-700 bg-green-50 p-2 rounded">"הבנתי. המשימה היא לכתוב תוכנית עסקית עם שלושה דגשים: 1. קהל יעד גיל שלישי. 2. הכנסות ממנויים. 3. שיווק בפייסבוק בלבד. האם להתחיל?"</p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה זה עובד?</h3>
      <p>
        מבחינה טכנית, כשהמודל כותב את ההוראות בעצמו כפלט, המילים האלה נכנסות ל"זיכרון העבודה" (Context Window) שלו בצורה חזקה יותר. עכשיו, כשהוא יבוא לבצע את המשימה, ההוראות נמצאות לו "מול העיניים" בתוך הטקסט של השיחה, וזה משפר דרמטית את הסיכוי שהוא יבצע אותן במדויק.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי לא צריך את זה?</h3>
      <p>
        בשאלות פשוטות ("מה בירת צרפת?", "תציע לי רעיון למתנה"). השיקוף מיותר כאן ומבזבז זמן. תשתמשו בטריק הזה רק כשהמשימה מורכבת, ארוכה, או כשיש לכם רשימת דרישות ספציפית מאוד שאסור לפספס.
      </p>
    </PlainText>
  },
  {
    id: 'explain-simply',
    categoryId: 'basics',
    title: 'טכניקת ELI5: תסביר לי כאילו אני בן 5',
    description: 'איך להפוך כל נושא מסובך (ביטקוין, פיזיקה קוונטית, פוליטיקה) להסבר שילד יכול להבין.',
    readTimeMinutes: 5,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: כוח הפשטות</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          אחת היכולות החזקות ביותר של ה-AI היא "תרגום משלבים". הוא קרא ספרי לימוד מסובכים וגם ספרי ילדים. בקשו ממנו: "תסביר לי את זה כאילו אני בן 5" (Explain Like I'm 5), והוא ייקח כל רעיון מורכב ויהפוך אותו לסיפור פשוט עם דוגמאות מהחיים, בלי מילים מסובכות.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">המורה הפרטי האולטימטיבי</h3>
      <p>
        לכולנו יש רגעים שאנחנו נתקלים במושג שאנחנו לא מבינים - בבנק, במוסך, אצל הרופא או בחדשות. גוגל לפעמים נותן הסברים מוויקיפדיה שהם בעצמם מסובכים מדי. ה-AI יכול ללעוס את המידע ולהגיש לכם אותו בכפית.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה: איך עובד האינטרנט?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700 mb-2">הסבר טכני (רגיל)</p>
          <p className="text-sm">"האינטרנט הוא רשת גלובלית של רשתות מחשבים המשתמשות בפרוטוקול TCP/IP כדי לקשר בין התקנים..."</p>
          <p className="text-xs text-slate-500 mt-2">משעמם ולא מובן לכולם.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700 mb-2">הסבר ELI5 (כמו בן 5)</p>
          <p className="text-sm">"תחשוב שהאינטרנט הוא כמו חוט טלפון ענקי שמחבר את המחשב שלך לכל המחשבים בעולם. כשאתה שולח הודעה, זה כמו לשלוח מכתב בצינור הזה שעובר דרך הרבה תחנות עד שהוא מגיע לחבר שלך."</p>
          <p className="text-xs text-slate-500 mt-2">ברור, פשוט וציורי.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מתי להשתמש בזה?</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>לימודים:</strong> כשאתם מתכוננים למבחן ולא מבינים נושא.</li>
        <li><strong>מסמכים:</strong> כשקיבלתם מכתב מהביטוח עם המון מושגים. תדביקו את הטקסט ותבקשו: "תסביר לי בפשטות מה הם רוצים ממני".</li>
        <li><strong>סקרנות:</strong> כדי להבין איך דברים עובדים (מנוע של רכב, חורים שחורים, כלכלה).</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לחשוב שזה לא מדויק</h3>
      <p>
        אנלוגיות ופישוט בהכרח מאבדים קצת מהדיוק המדעי לטובת ההבנה. זה בסדר גמור להבנה כללית, אבל אם אתם צריכים לבנות את המנוע - אל תסתמכו רק על ההסבר הפשוט. המטרה היא הבנה רעיונית, לא דיוק אקדמי מושלם.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">עוד טריקים?</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            אפשר לבקש אנלוגיות ספציפיות?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            בטח! זה עובד מעולה. "תסביר לי איך עובד המערכת החיסונית בעזרת דוגמה של צבא ומבצר", או "תסביר לי על מניות בעזרת דוגמה של פיצרייה".
          </p>
        </details>
      </div>
    </PlainText>
  },
  {
    id: 'short-answer-quality',
    categoryId: 'basics',
    title: 'שליטה באורך: איך למנוע ממנו לחפור',
    description: 'ה-AI אוהב לכתוב מגילות. כך תגרמו לו להיות קצר, קולע ולעניין.',
    readTimeMinutes: 4,
    lastUpdated: '03/2024',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">בשורה התחתונה: הגבילו אותו מראש</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          כברירת מחדל, ה-AI נוטה להיות מנומס מדי ולכתוב הקדמות ארוכות ("כמובן! הנה המידע שביקשת..."). כדי לחסוך זמן קריאה, תנו לו הוראות מגבילות: "ענה במשפט אחד בלבד", "בלי הקדמות", "ישר ולעניין", או "מקסימום 50 מילים". זה עובד כמו קסם.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">למה הוא חופר?</h3>
      <p>
        המודלים אומנו להיות "עוזרים מועילים". בעיני המאמנים שלהם, תשובה ארוכה ומפורטת נחשבת בדרך כלל לטובה יותר. לכן, הנטייה הטבעית שלו היא לשפוך את כל הידע שלו על הדף, להוסיף סיכום בסוף, ולהיות סופר-נחמד בהתחלה. לפעמים אנחנו פשוט רוצים "כן" או "לא".
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">דוגמה לצמצום</h3>
      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-xl">
          <p className="font-bold text-slate-700">שאלה רגילה:</p>
          <p className="text-sm italic">"מה ההבדל בין מניה לאג"ח?"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: 3 פסקאות ארוכות, עם הגדרות כלכליות, היסטוריה, ודוגמאות.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-700">שאלה עם מגבלה:</p>
          <p className="text-sm italic">"מה ההבדל בין מניה לאג"ח? <span className="font-bold not-italic">תענה במשפט אחד פשוט למי שלא מבין בכלכלה.</span>"</p>
          <p className="text-xs text-slate-500 mt-2">תוצאה: "מניה היא בעלות חלקית על חברה, בעוד שאג"ח הוא הלוואה שאתה נותן לחברה תמורת ריבית." (בול!)</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">מילות קסם לקיצור</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>"בלי הקדמות וסיכומים":</strong> מעיף את ה"בטח, הנה התשובה" ואת ה"מקווה שעזרתי".</li>
        <li><strong>"ברשימת בולטים (Bullets)":</strong> הופך טקסט רציף לרשימה קריאה.</li>
        <li><strong>"TL;DR":</strong> (Too Long; Didn't Read) - בקשו ממנו "תן לי TL;DR של הטקסט הזה". הוא יסכם אותו לשורה אחת.</li>
        <li><strong>"רק את העובדות":</strong> מנפה את כל התיאורים והסופרלטיבים.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הטעות: לחתוך יותר מדי</h3>
      <p>
        אם תבקשו "קצר מאוד", אתם עלולים לאבד מידע חשוב. תמיד עדיף לבקש "תמציתי אך מדויק" או "תתמקד בעיקר", מאשר סתם "קצר". תוודאו שלא איבדתם את הפואנטה.
      </p>
    </PlainText>
  },
  {
    id: 'privacy-safety-guide',
    categoryId: 'safety',
    title: 'המדריך לפרטיות: מה אסור בשום אופן לספר ל-AI?',
    description: 'האם מותר להעלות מסמכים רפואיים? סיסמאות? סודות מסחריים? כל מה שצריך לדעת כדי להישאר בטוחים.',
    readTimeMinutes: 5,
    lastUpdated: '01/2026',
    imageUrl: 'https://images.unsplash.com/photo-1510915361405-ef8db9036289?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-red-50 border-r-4 border-red-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-red-900 mb-2">כלל הברזל: אם זה סוד, זה לא עולה ל-AI</h3>
        <p className="text-red-800 text-sm md:text-base leading-relaxed">
          ברירת המחדל של רוב כלי ה-AI (כמו ChatGPT ו-Gemini) היא להשתמש בשיחות שלכם כדי לאמן ולשפר את המודל. המשמעות: עובד של החברה, או אפילו משתמש אחר בעתיד, עלולים תיאורטית להיחשף למידע שהזנתם.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הרשימה השחורה: מה לא כותבים?</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            פרטים אישיים מזהים (PII)
          </p>
          <p className="text-sm text-slate-600">תעודות זהות, מספרי אשראי, כתובות מגורים מלאות, מספרי טלפון פרטיים. גם אם ה-AI מבטיח שהוא "מאובטח", דליפות מידע קורות.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-red-500" />
            סודות מסחריים ועבודה
          </p>
          <p className="text-sm text-slate-600">קוד תוכנה סודי של החברה, מצגות פנימיות שטרם פורסמו, רשימות לקוחות, אסטרטגיות עסקיות רגישות. (סמסונג למדו את זה בדרך הקשה כשעובדים הדליפו קוד סודי ל-ChatGPT).</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Brain className="w-5 h-5 text-red-500" />
            מידע רפואי ואינטימי
          </p>
          <p className="text-sm text-slate-600">סיכומי ביקור רופא, תוצאות בדיקות דם, או פרטים אינטימיים על אנשים אחרים ללא ידיעתם.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">איך בכל זאת עובדים בטוח?</h3>
      <p>
        זה לא אומר שאי אפשר להיעזר ב-AI לעבודה, אבל צריך לעשות "התממה" (Anonymization) למידע.
      </p>
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
        <h4 className="font-bold text-green-900 mb-2">שיטת "החלפת השמות"</h4>
        <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
          <li><strong>במקום:</strong> "כתוב מייל ללקוח יוסי כהן מחברת 'אינטל' שמסרב לשלם 50,000 שקל."</li>
          <li><strong>כתבו:</strong> "כתוב מייל ללקוח [שם בדוי] מחברת [חברה גדולה] שמסרב לשלם סכום משמעותי."</li>
        </ul>
        <p className="text-sm text-green-800 mt-2">
          אחרי שה-AI כותב את המייל, תעתיקו אותו לוורד ושם תחזירו את הפרטים האמיתיים.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">הגדרות שחובה להכיר</h3>
      <p>
        ברוב הכלים יש אפשרות לכבות את שמירת ההיסטוריה ואת השימוש במידע לאימון.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ב-ChatGPT:</strong> חפשו בהגדרות את "Data Controls" וכבו את "Chat History & Training".</li>
        <li><strong>ב-Gemini/Google:</strong> המידע נשמר בחשבון Google שלכם, אפשר למחוק אותו דרך "My Activity".</li>
        <li><strong>בארגונים:</strong> אם יש לכם גרסת Enterprise (בתשלום ארגוני), בדרך כלל יש התחייבות שהמידע <strong>לא</strong> משמש לאימון המודל.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">שאלות נפוצות</h3>
      <div className="space-y-4">
        <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
          <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
            האם מותר להעלות תמונה שלי?
            <ChevronLeft className="w-4 h-4 transition-transform group-open:-rotate-90" />
          </summary>
          <p className="text-slate-600 mt-2 text-sm">
            תמונה של הפנים שלכם נחשבת מידע ביומטרי רגיש. אם אתם מעלים אותה, קחו בחשבון שהיא נשמרת בשרתים. עדיף לא להעלות תמונות של ילדים או אנשים שלא נתנו הסכמה.
          </p>
        </details>
      </div>
    </PlainText>
  }
  ,
  {
    id: 'ai-automation-blueprint',
    categoryId: 'automation',
    title: 'AI Automation Blueprint: Build Real Workflows That Save Hours Every Week',
    description: 'A practical, step-by-step guide to designing AI automations for real business work: intake, routing, drafting, approval, and measurement.',
    readTimeMinutes: 9,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-amber-50 border-r-4 border-amber-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-amber-900 mb-2">TL;DR</h3>
        <p className="text-amber-800 text-sm md:text-base leading-relaxed">
          Real AI automation is not a single prompt. It is a workflow: clear input, reliable routing, safe drafting, human approval, and a feedback loop.
          This blueprint shows you how to build automations that actually survive in production and save your team 5 to 15 hours per week.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Most “AI Automations” Fail in the Real World</h3>
      <p>
        The fastest way to waste time with AI is to automate the wrong thing. Teams often pick tasks that are emotional, ambiguous, or politically sensitive,
        then wonder why the outputs are chaotic. Real automation starts with repeatable work, clear standards, and small decisions. If you can write a
        checklist for a task, you can usually automate 50 to 80 percent of it. If you cannot write a checklist, start with a smaller piece of the process.
      </p>
      <p>
        There are also reliability issues: models hallucinate, inputs change, and output quality drifts when the business changes. That is why every
        automation must include guardrails, escalation, and a basic measurement plan. Think of AI like a junior teammate: brilliant at draft work,
        fragile without context, and dangerous without review.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The 5-Layer Automation Model</h3>
      <p>
        Use this model to design automations that are stable, safe, and easy to debug. Each layer can be improved separately, and most “AI chaos”
        comes from skipping one of them.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Input:</strong> What data does the AI need, and in what format? Define fields, not just paragraphs.</li>
        <li><strong>Routing:</strong> When should the AI act? When should it do nothing? When should it hand off to a human?</li>
        <li><strong>Drafting:</strong> The AI produces a first version, following a strict template or style guide.</li>
        <li><strong>Approval:</strong> A human validates the output, especially when money, customers, or legal risk are involved.</li>
        <li><strong>Learning loop:</strong> Track outcomes and fix the root causes of mistakes, not just the prompt.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 1: Find the Right Task</h3>
      <p>
        Choose a task that is high-volume, low-risk, and has a clear definition of “good.” Classic examples include summarizing customer calls, drafting
        internal reports, categorizing support tickets, preparing meeting agendas, or generating first-pass market research. Avoid tasks that are one-off,
        emotionally sensitive, or legally binding until you have experience and guardrails.
      </p>
      <p>
        A simple test: if you could give the task to a smart intern with a checklist and trust the first draft, it is a good automation candidate.
        If you would never delegate it, do not automate it yet.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 2: Standardize Inputs</h3>
      <p>
        Most failed automations are input problems, not model problems. Define structured inputs: a short title, a customer segment, a goal, a risk flag,
        a reference document, and example outputs. If the input is messy, the output will be messy. Use templates or forms so the AI does not have to guess.
      </p>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p className="font-bold text-slate-800 mb-2">Example input template</p>
        <p className="text-sm text-slate-600">
          Goal: Draft a response to a billing inquiry. Customer tier: Pro. Issue: double charge. Context: user already received refund last month.
          Tone: calm, firm, empathetic. Required actions: explain policy, confirm current status, offer next steps.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 3: Draft with Constraints</h3>
      <p>
        Prompts should be short and specific. The best outputs come from constraints: length, tone, required elements, and forbidden claims. Use explicit
        formatting like headings, bullets, or labeled sections so reviewers can quickly verify accuracy. If the task needs numbers, require the AI to list
        its assumptions separately.
      </p>
      <p>
        In production, force the AI to cite the data it used or the source document section. This reduces hallucinations and makes quality review faster.
        If it cannot cite, it should say “missing data” instead of guessing.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 4: Build Approval Paths</h3>
      <p>
        Automations must include a “safe stop.” Define situations that require human approval: high-value transactions, contractual language,
        regulated industries, or customer escalation. You can still save time by producing a draft, but you keep accountability where it belongs.
      </p>
      <p>
        This is also where internal trust is built. When teammates see that AI outputs are reviewed, they stop feeling threatened and start feeling
        supported. Adoption rises when people feel in control.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 5: Measure Impact That Matters</h3>
      <p>
        The point of automation is not “AI usage.” It is fewer hours, faster responses, fewer errors, and better outcomes. Track one time metric
        (minutes saved), one quality metric (error rate), and one business metric (customer satisfaction, conversion rate, or margin).
      </p>
      <p>
        If quality drops, you have to fix the workflow before you scale it. A workflow that saves time but damages trust is not automation, it is
        technical debt.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Automation Ideas That Actually Work</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Summarize and tag sales calls, then push insights to the CRM.</li>
        <li>Draft first-pass customer support replies from a policy doc.</li>
        <li>Create weekly status updates from project notes and Jira tickets.</li>
        <li>Generate onboarding checklists based on role and department.</li>
        <li>Convert long research into a concise executive memo.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Common Mistakes to Avoid</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Trying to automate tasks that are not standardized.</li>
        <li>Letting the model “decide” without clear rules or approvals.</li>
        <li>Forgetting to store inputs and outputs for debugging.</li>
        <li>Skipping a human review step for customer-facing copy.</li>
        <li>Measuring only “AI usage” instead of business impact.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Final Takeaway</h3>
      <p>
        AI automation is not a magic switch. It is a process of design. If you build the workflow carefully, small automations stack into massive
        time savings. Start with one task, make it reliable, and only then scale. That is how you build an AI system your team actually wants to use.
      </p>
    </PlainText>
  },
  {
    id: 'ai-investing-research-workflow',
    categoryId: 'work',
    title: 'AI for Investing: A Research Workflow That Saves Time Without Guessing',
    description: 'Use AI to speed up investment research, not to replace judgment. A safe, structured workflow for notes, risk checks, and decision support.',
    readTimeMinutes: 10,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-slate-50 border-r-4 border-slate-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Important Note</h3>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          This article is for educational purposes only. It does not provide financial advice. Use professional judgment and comply with your local laws
          and company policies.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why AI Helps in Investing (and Where It Should Not)</h3>
      <p>
        Investing is 80 percent research and discipline, 20 percent decision. AI is great at the research side: summarizing documents, extracting key
        risks, comparing competitors, and organizing notes. It is terrible at predicting markets, future prices, or “guaranteed returns.” If you use AI
        as a research assistant, you get speed and clarity. If you use it as a crystal ball, you get false confidence.
      </p>
      <p>
        The goal is not to let AI decide. The goal is to reduce the time you spend gathering information so you can spend more time thinking. That is
        the edge most investors actually lack.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The 6-Step AI Investing Workflow</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Define the thesis.</strong> Write your investment question in one sentence.</li>
        <li><strong>Collect primary sources.</strong> Use official filings, earnings calls, annual reports, and investor presentations.</li>
        <li><strong>Summarize with structure.</strong> Ask AI to extract risks, growth drivers, and cash flow signals.</li>
        <li><strong>Cross-check.</strong> Compare AI output to the original docs and correct errors.</li>
        <li><strong>Write a decision memo.</strong> Summarize your thesis, evidence, and counter-arguments.</li>
        <li><strong>Set a review schedule.</strong> Revisit assumptions on a fixed calendar.</li>
      </ol>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 1: Thesis First, Not Last</h3>
      <p>
        The most common mistake is asking AI for “everything.” That produces a long, unfocused summary. Instead, define the question:
        “Is this company growing revenue while expanding margins?” or “Will this market expand faster than competitors?” Give the AI a thesis framework
        so it filters the data the same way you would.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 2: Use Primary Sources</h3>
      <p>
        AI summaries are only as good as the data you feed them. Use original filings and earnings transcripts. When you give the AI a blog post about
        a company, it will repeat the blog’s bias. When you give it a 10-K, it will extract real disclosures. This is how you avoid misinformation.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 3: Ask the Right Questions</h3>
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <p className="font-bold text-blue-800 mb-2">Example prompt structure</p>
        <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
          <li>Extract the top 5 risks mentioned in the filing.</li>
          <li>List the main revenue drivers and what could slow them down.</li>
          <li>Identify any changes in guidance or forward-looking statements.</li>
          <li>Summarize capital allocation plans in plain English.</li>
        </ul>
      </div>
      <p>
        Notice how these prompts are about evidence, not predictions. You can also ask for a neutral “bear case” summary, which forces the AI to look
        for negative signals. That reduces confirmation bias.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 4: Build a Decision Memo</h3>
      <p>
        The decision memo is the most valuable output of your process. It should include your thesis, the supporting evidence, the main risks, and the
        conditions under which you would change your mind. This turns the AI’s output into a tool for discipline. Without a memo, you will forget why
        you invested and panic during volatility.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Step 5: Use AI for Monitoring, Not Trading</h3>
      <p>
        AI can track news, scan for changes in guidance, or detect changes in sentiment. But it should not execute trades. Automated trading requires
        strict risk controls, compliance, and testing. For most investors, AI should be a monitoring assistant, not a trading engine.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Common Pitfalls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Asking AI to predict prices or “best stocks.”</li>
        <li>Using AI summaries without checking the source documents.</li>
        <li>Ignoring the bear case because the AI sounds confident.</li>
        <li>Letting AI decide position sizes or portfolio allocation.</li>
        <li>Forgetting that markets change faster than static research.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Final Takeaway</h3>
      <p>
        AI can make your investing research faster, more organized, and less overwhelming. But the decision still belongs to you. Use AI to highlight
        evidence, pressure-test your thesis, and keep your process consistent. That is how you get real value without the illusion of certainty.
      </p>
    </PlainText>
  },
  {
    id: 'ai-customer-support-ops',
    categoryId: 'work',
    title: 'AI for Customer Support: Cut Response Time Without Losing Trust',
    description: 'A practical guide to building AI-assisted customer support workflows that reduce wait time, improve quality, and protect brand voice.',
    readTimeMinutes: 9,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-green-50 border-r-4 border-green-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-green-900 mb-2">The Support Reality</h3>
        <p className="text-green-800 text-sm md:text-base leading-relaxed">
          Customers do not want “AI.” They want fast, accurate answers. The best support systems use AI for drafting and triage while keeping humans
          responsible for empathy, exceptions, and final approval.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Support Is a Perfect AI Use Case</h3>
      <p>
        Support is repetitive, high-volume, and full of structured policy. That is exactly where AI shines. A model can read policies, past tickets,
        and product docs, then propose a response in seconds. The human agent edits the final message, adds empathy, and handles edge cases. This hybrid
        approach can cut response time by 30 to 60 percent without making customers feel like they are talking to a robot.
      </p>
      <p>
        The key is to make AI invisible to the customer and helpful to the agent. When the AI is treated as a teammate instead of a replacement,
        support teams get faster and happier.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The 4-Part Support Workflow</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Triage:</strong> Classify the ticket, detect urgency, and route to the right queue.</li>
        <li><strong>Draft:</strong> Produce a response that follows policy and brand tone.</li>
        <li><strong>Review:</strong> Human agent checks accuracy and empathy, then edits.</li>
        <li><strong>Learn:</strong> Log mistakes and update the knowledge base.</li>
      </ol>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What to Automate First</h3>
      <p>
        Start with the top 20 percent of ticket types that make up 80 percent of volume. These are usually billing questions, password resets,
        account changes, and simple how-to requests. Create templates for each type and ask the AI to fill them based on the ticket content and policy
        references. This makes review fast and consistent.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Protecting Brand Voice</h3>
      <p>
        AI outputs should sound like your company, not a generic assistant. Provide a short brand voice guide: tone, formality, banned phrases, and
        required closing lines. If your company is casual, say it. If your company is formal, say it. The AI will follow direction when it is clear.
      </p>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p className="font-bold text-slate-800 mb-2">Brand voice checklist</p>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li>Friendly, concise, no jargon.</li>
          <li>Always confirm the customer’s goal.</li>
          <li>Never promise refunds without policy confirmation.</li>
          <li>End with one clear next step.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Handling Sensitive Cases</h3>
      <p>
        AI should never close tickets involving legal threats, compliance, security incidents, or emotional distress. These must be routed to human
        specialists. Your workflow should include a “red flag” detection layer that automatically escalates those tickets.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Metrics That Matter</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>First response time (minutes saved).</li>
        <li>Resolution time (overall efficiency).</li>
        <li>Customer satisfaction score (quality impact).</li>
        <li>Escalation rate (risk control).</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Final Takeaway</h3>
      <p>
        AI in support is not about replacing agents. It is about removing the boring parts so agents can focus on real customer care. Start small,
        measure quality, and expand only when trust is proven. That is how you get speed without losing loyalty.
      </p>
    </PlainText>
  },
  {
    id: 'ai-finance-ops-fpa',
    categoryId: 'work',
    title: 'AI for Finance Ops and FP&A: Faster Close, Better Insights',
    description: 'Reduce reporting time and improve clarity with AI-assisted finance workflows. A practical guide for FP&A and finance operations teams.',
    readTimeMinutes: 10,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Finance Teams Are Drowning in Manual Work</h3>
        <p className="text-blue-800 text-sm md:text-base leading-relaxed">
          Most finance teams spend more time preparing reports than analyzing them. AI can flip that ratio by drafting narratives, explaining variances,
          and organizing data for faster review.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Where AI Creates Real Value in Finance</h3>
      <p>
        Finance workflows are structured, repeatable, and governed by strict rules. That makes them ideal for AI assistance, especially in three areas:
        narrative reporting, variance explanations, and consolidation of cross-team inputs. AI should not replace accounting judgment, but it can reduce
        the time spent on formatting and first drafts.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Use Cases That Save Hours</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Drafting monthly close summaries from a standard template.</li>
        <li>Explaining budget vs. actual variances in plain English.</li>
        <li>Summarizing departmental updates into an executive report.</li>
        <li>Creating meeting agendas and follow-up action lists.</li>
        <li>Extracting key risks from supplier contracts or invoices.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">A Safe AI Workflow for Finance</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Clean inputs:</strong> Provide structured tables or consistent exports.</li>
        <li><strong>Defined outputs:</strong> Use a standard report template every time.</li>
        <li><strong>Human review:</strong> A finance lead validates numbers and narrative.</li>
        <li><strong>Audit trail:</strong> Store inputs and outputs for compliance.</li>
      </ol>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Sample Variance Prompt</h3>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-700">
          “You are drafting a variance explanation for the monthly close. Use the provided table. Focus on revenue, gross margin, and operating expenses.
          Explain the top three drivers, quantify impact, and avoid speculation. Output in three bullet points.”
        </p>
      </div>
      <p>
        This is the kind of constrained prompt that produces consistent, reviewable output. The AI does not need to “think like a CFO.” It just needs
        to format the data clearly so the CFO can make decisions.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Risk Controls You Must Keep</h3>
      <p>
        Finance is high-stakes. Do not allow AI to post journal entries, approve payments, or change records. AI should draft and summarize, not execute.
        Make sure sensitive data is protected, access is logged, and outputs are reviewed by qualified staff.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Final Takeaway</h3>
      <p>
        Finance teams do not need “more AI.” They need less manual work and clearer reporting. Use AI to draft, summarize, and standardize. Keep humans
        in charge of judgment and compliance. That balance delivers speed without sacrificing trust.
      </p>
    </PlainText>
  },
  {
    id: 'ai-sales-marketing-ops',
    categoryId: 'work',
    title: 'AI for Sales and Marketing Ops: From Leads to Revenue, Faster',
    description: 'A high-ROI playbook for using AI in sales and marketing operations: lead scoring, outreach drafts, and campaign insights.',
    readTimeMinutes: 9,
    lastUpdated: '02/2026',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    content: <PlainText>
      <div className="bg-purple-50 border-r-4 border-purple-600 p-4 mb-6 rounded-lg">
        <h3 className="text-lg font-bold text-purple-900 mb-2">The Revenue Team Problem</h3>
        <p className="text-purple-800 text-sm md:text-base leading-relaxed">
          Sales and marketing teams are buried in research, list cleaning, and content drafts. AI can shorten the path from lead to qualified
          conversation if you use it in the right places.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Where AI Delivers the Highest ROI</h3>
      <p>
        The biggest gains come from tasks that are repetitive, research-heavy, and time-consuming. AI can summarize accounts, create persona-based
        messaging, and highlight patterns in campaign performance. The human still owns strategy and relationship building, but the groundwork gets done
        faster.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Use Cases That Actually Convert</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Account research summaries before discovery calls.</li>
        <li>First-draft outreach emails based on persona and industry.</li>
        <li>Campaign post-mortems that explain what worked and why.</li>
        <li>Lead routing based on fit, urgency, and deal size.</li>
        <li>FAQ and objection handling scripts for SDRs.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">A Simple AI Outreach Framework</h3>
      <p>
        Give the AI constraints so it cannot ramble. A good outreach message is short, specific, and respectful. Provide the target role, company size,
        value proposition, and a single clear CTA. The AI can then produce five variations for A/B testing.
      </p>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-700">
          “Draft 3 outreach emails to a VP of Operations at a 200-person SaaS company. Focus on reducing onboarding time. Tone: confident, brief, not pushy.
          Include one data point and a 15-minute meeting CTA.”
        </p>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Do Not Automate Relationships</h3>
      <p>
        AI should assist with preparation, not replace real conversations. If your outreach feels automated, response rates fall. Use AI to draft, then
        personalize with a real observation. That balance creates authenticity at scale.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Metrics to Track</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Response rate and meeting conversion.</li>
        <li>Time-to-first-touch after lead creation.</li>
        <li>Pipeline velocity and deal cycle length.</li>
        <li>Content production time per campaign.</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Final Takeaway</h3>
      <p>
        AI can accelerate sales and marketing ops, but it cannot replace trust. Use it to do the busy work, keep humans focused on relationships, and
        you will see better pipeline speed without damaging your brand.
      </p>
    </PlainText>
  }
];
