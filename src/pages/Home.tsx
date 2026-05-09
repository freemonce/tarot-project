import { useNavigate } from "react-router-dom";
import "../styles/pages/Home.css";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("onboarding_seen")) {
      alert("데이터는 기기에 저장됩니다. 백업을 권장합니다.");
      localStorage.setItem("onboarding_seen", "true");
    }
  }, []);

  return (
    <div className="home-root">
      <div className="stars"></div>
      <div className="stars stars2"></div>

      <main className="home-container">
        <section className="hero-card">
          <p className="hero-badge">🔮 Tarot Guidance</p>

          <h1 className="hero-title">
            오늘,
            <br />
            어떤 마음으로 오셨나요?
          </h1>

          <p className="hero-desc">
            망설임도 괜찮아요.
            <br />
            당신의 마음에 작은 방향을 비춰드릴게요.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/write")}
            >
              카드 뽑기 시작하기
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/mypage")}
            >
              지난 기록 보기
            </button>
          </div>
        </section>

        <section className="floating-card">
          <div className="tarot-card">
            <div className="card-glow"></div>
            <span>✦</span>
          </div>
        </section>
      </main>
    </div>
  );
}
