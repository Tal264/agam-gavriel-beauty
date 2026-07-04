import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | אגם גבריאל" },
      { name: "description", content: "מדיניות הפרטיות של אתר אגם גבריאל." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="מדיניות פרטיות">
      <p>
        פרטיותך חשובה לנו. מסמך זה מסביר איזה מידע נאסף באתר וכיצד הוא בשימוש.
      </p>
      <h2>מידע שנאסף</h2>
      <p>
        המידע שנאסף באמצעות טופס יצירת הקשר (שם, טלפון, אימייל, תאריך, סוג שירות
        והודעה) משמש לצורך מענה לפנייה בלבד. הפרטים מועברים ישירות לאגם דרך
        וואטסאפ ואינם נשמרים על ידי האתר.
      </p>
      <h2>עוגיות</h2>
      <p>
        האתר עושה שימוש בעוגיות טכניות בלבד, לצורך שמירת העדפות נגישות.
      </p>
      <h2>יצירת קשר</h2>
      <p>
        לשאלות בנושא פרטיות ניתן לפנות בטלפון או בוואטסאפ המופיעים באתר.
      </p>
    </LegalPage>
  );
}
