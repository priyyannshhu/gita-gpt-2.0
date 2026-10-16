import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

/* Shared shell + home page — loaded up front */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TeamSection from "./components/TeamSection.jsx";
import { ScrollToTop } from "./components/Reveal.jsx";
import HomePage from "./pages/HomePage.jsx";

/* Everything else is loaded on demand, one chunk per route */
const About = lazy(() => import("./pages/About.jsx"));
const QuotesPage = lazy(() => import("./pages/QuotesPage.jsx"));
const ChatPage = lazy(() => import("./pages/ChatPage.jsx"));
const BooksPage = lazy(() => import("./pages/BooksPage.jsx"));
const SummaryPage = lazy(() => import("./pages/SummaryPage.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const Chapter1 = lazy(() => import("./chapters/Chapter1.jsx"));
const Chapter2 = lazy(() => import("./chapters/Chapter2.jsx"));
const Chapter3 = lazy(() => import("./chapters/Chapter3.jsx"));
const Chapter4 = lazy(() => import("./chapters/Chapter4.jsx"));
const Chapter5 = lazy(() => import("./chapters/Chapter5.jsx"));
const Chapter6 = lazy(() => import("./chapters/Chapter6.jsx"));
const Chapter7 = lazy(() => import("./chapters/Chapter7.jsx"));
const Chapter8 = lazy(() => import("./chapters/Chapter8.jsx"));
const Chapter9 = lazy(() => import("./chapters/Chapter9.jsx"));
const Chapter10 = lazy(() => import("./chapters/Chapter10.jsx"));
const Chapter11 = lazy(() => import("./chapters/Chapter11.jsx"));
const Chapter12 = lazy(() => import("./chapters/Chapter12.jsx"));
const Chapter13 = lazy(() => import("./chapters/Chapter13.jsx"));
const Chapter14 = lazy(() => import("./chapters/Chapter14.jsx"));
const Chapter15 = lazy(() => import("./chapters/Chapter15.jsx"));
const Chapter16 = lazy(() => import("./chapters/Chapter16.jsx"));
const Chapter17 = lazy(() => import("./chapters/Chapter17.jsx"));
const Chapter18 = lazy(() => import("./chapters/Chapter18.jsx"));

/* The 18 chapters of the Bhagavad Gita, in canonical order. */
const CHAPTERS = [
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
  Chapter12,
  Chapter13,
  Chapter14,
  Chapter15,
  Chapter16,
  Chapter17,
  Chapter18,
];

/* Shared chrome: header, page body, footer — identical on every route. */
const SiteLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop trigger={location.pathname} />
      <Header />
      <main className="app-main page-enter" key={location.pathname}>
        <Suspense
          fallback={<div className="route-loading" role="status" aria-label="Loading" />}
        >
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SiteLayout>
              <HomePage />
              <TeamSection />
            </SiteLayout>
          }
        />
        <Route
          path="/about"
          element={
            <SiteLayout>
              <About />
            </SiteLayout>
          }
        />
        <Route
          path="/quotes"
          element={
            <SiteLayout>
              <QuotesPage />
            </SiteLayout>
          }
        />
        <Route
          path="/chat"
          element={
            <SiteLayout>
              <ChatPage />
            </SiteLayout>
          }
        />
        <Route
          path="/books"
          element={
            <SiteLayout>
              <BooksPage />
            </SiteLayout>
          }
        />
        <Route
          path="/summary"
          element={
            <SiteLayout>
              <SummaryPage />
            </SiteLayout>
          }
        />

        {CHAPTERS.map((Chapter, index) => (
          <Route
            key={`chapter${index + 1}`}
            path={`/chapter${index + 1}`}
            element={
              <SiteLayout>
                <Chapter />
              </SiteLayout>
            }
          />
        ))}

        <Route
          path="/terms"
          element={
            <SiteLayout>
              <Terms />
            </SiteLayout>
          }
        />
        <Route
          path="/privacy"
          element={
            <SiteLayout>
              <Privacy />
            </SiteLayout>
          }
        />

        <Route
          path="*"
          element={
            <SiteLayout>
              <NotFound />
            </SiteLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
