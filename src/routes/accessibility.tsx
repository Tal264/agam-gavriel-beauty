import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | אגם גבריאל" },
      {
        name: "description",
        content: "הצהרת הנגישות של האתר של אגם גבריאל — מאפרת ומעצבת שיער.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="הצהרת נגישות">
      <p>
        אנו רואים חשיבות רבה בהנגשת האתר לכל המשתמשים, לרבות אנשים עם מוגבלויות.
        האתר תוכנן ופותח מתוך מחויבות לעמוד ברמת נגישות AA לפי הנחיות WCAG 2.1
        ובהתאם לתקן הישראלי 5568.
      </p>
      <h2>אמצעי נגישות באתר</h2>
      <ul>
        <li>תפריט נגישות המאפשר הגדלת והקטנת גודל טקסט.</li>
        <li>מצב ניגודיות גבוהה וגווני אפור.</li>
        <li>הדגשת קישורים.</li>
        <li>תמיכה בניווט מקלדת ובקוראי מסך.</li>
        <li>טקסט חלופי לתמונות.</li>
      </ul>
      <h2>פנייה בנושא נגישות</h2>
      <p>
        אם נתקלת בבעיה בנגישות האתר, נשמח לשמוע ונטפל בהקדם. ניתן לפנות בטלפון
        או בוואטסאפ המופיעים בעמוד יצירת הקשר.
      </p>
    </LegalPage>
  );
}
