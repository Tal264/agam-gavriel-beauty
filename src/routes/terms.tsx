import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "תנאי שימוש | אגם גבריאל" },
      { name: "description", content: "תנאי השימוש באתר של אגם גבריאל." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="תנאי שימוש">
      <p>
        השימוש באתר כפוף לתנאים אלה. הגלישה באתר מהווה הסכמה לתנאים.
      </p>
      <h2>תוכן האתר</h2>
      <p>
        התכנים, התמונות והעיצוב באתר הם רכושה הבלעדי של אגם גבריאל ואין להשתמש
        בהם ללא רשות מפורשת בכתב.
      </p>
      <h2>הזמנת שירות</h2>
      <p>
        פנייה דרך האתר אינה מהווה הזמנה מחייבת. הזמנת שירות תיקבע לאחר תיאום
        אישי ואישור זמינות.
      </p>
      <h2>אחריות</h2>
      <p>
        אנו עושים כל מאמץ שהמידע באתר יהיה מדויק ועדכני, אך איננו אחראים לנזקים
        עקיפים שעלולים להיגרם משימוש באתר.
      </p>
    </LegalPage>
  );
}
