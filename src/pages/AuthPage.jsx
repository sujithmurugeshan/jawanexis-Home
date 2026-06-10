import { ArrowLeft, CheckCircle2, Eye, LockKeyhole, Mail, Phone, User } from "lucide-react";
import logo3d from "../assets/3dlogo.png";

function AuthPage({ mode = "login" }) {
  const isSignup = mode === "signup";
  const title = isSignup ? "Create your account" : "Welcome back";
  const subtitle = isSignup
    ? "Start learning with live classes, mentor guidance, and placement support."
    : "Login to continue your learning journey with Jawanexis.";

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-[#f4fff7] px-4 py-6 text-guvi-ink sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-[1180px] items-center">
        <section className="grid w-full overflow-hidden rounded-[8px] border border-guvi-line bg-white shadow-soft lg:grid-cols-[0.92fr_1.08fr]">
          <div className="auth-brand-panel relative hidden min-h-[680px] flex-col justify-between overflow-hidden bg-[#07110b] p-10 text-white lg:flex">
            <a href="#home" className="relative z-10 inline-flex items-center gap-3" aria-label="Back to Jawanexis home">
              <img src={logo3d} alt="" className="h-11 w-11 object-contain" aria-hidden="true" />
              <div>
                <p className="text-2xl font-extrabold leading-none">Jawanexis</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">Learn, Lead, Innovate</p>
              </div>
            </a>

            <div className="relative z-10 max-w-[430px]">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-guvi-green">Career programs</p>
              <h1 className="mt-5 text-[44px] font-extrabold leading-[1.05] tracking-tight">
                Learn skills that move your career forward.
              </h1>
              <p className="mt-5 text-[17px] font-medium leading-8 text-white/72">
                Access practical courses, mentor-led sessions, and placement-focused training from one clean dashboard.
              </p>
            </div>

            <div className="relative z-10 grid gap-4">
              {["Live classes with mentors", "Placement guidance", "Project based learning"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/86">
                  <CheckCircle2 size={18} className="text-guvi-green" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[680px] items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-[460px]">
              <a href="#home" className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold text-black/62 hover:text-black">
                <ArrowLeft size={17} aria-hidden="true" />
                Back to home
              </a>

              <div className="mb-9">
                <div className="mb-7 flex items-center gap-3 lg:hidden">
                  <img src={logo3d} alt="" className="h-10 w-10 object-contain" aria-hidden="true" />
                  <div>
                    <p className="text-xl font-extrabold leading-none">Jawanexis</p>
                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-black/50">Learn, Lead, Innovate</p>
                  </div>
                </div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-guvi-deepGreen">
                  {isSignup ? "Join Jawanexis" : "Student portal"}
                </p>
                <h2 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-black sm:text-[42px]">{title}</h2>
                <p className="mt-3 text-[16px] font-medium leading-7 text-black/58">{subtitle}</p>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                {isSignup ? (
                  <Field icon={<User size={18} />} label="Full name" type="text" placeholder="Enter your name" autoComplete="name" />
                ) : null}
                <Field icon={<Mail size={18} />} label="Email address" type="email" placeholder="Enter your email" autoComplete="email" />
                {isSignup ? (
                  <Field icon={<Phone size={18} />} label="Phone number" type="tel" placeholder="Enter your mobile number" autoComplete="tel" />
                ) : null}
                <Field icon={<LockKeyhole size={18} />} label="Password" type="password" placeholder="Enter your password" autoComplete={isSignup ? "new-password" : "current-password"} hasReveal />
                {isSignup ? (
                  <Field icon={<LockKeyhole size={18} />} label="Confirm password" type="password" placeholder="Confirm your password" autoComplete="new-password" hasReveal />
                ) : null}

                <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold">
                  <label className="inline-flex items-center gap-2 text-black/60">
                    <input type="checkbox" className="h-4 w-4 rounded border-guvi-line accent-guvi-green" />
                    {isSignup ? "I agree to the terms" : "Remember me"}
                  </label>
                  {!isSignup ? <a href="#login" className="text-guvi-deepGreen hover:text-black">Forgot password?</a> : null}
                </div>

                <button type="submit" className="mt-2 h-12 rounded-[8px] bg-guvi-green text-[16px] font-extrabold text-black shadow-lift transition hover:-translate-y-0.5">
                  {isSignup ? "Create Account" : "Login"}
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-guvi-line" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/40">or</span>
                <span className="h-px flex-1 bg-guvi-line" />
              </div>

              <button type="button" className="flex h-12 w-full items-center justify-center gap-3 rounded-[8px] border border-guvi-line bg-white text-sm font-extrabold text-black transition hover:border-guvi-green hover:bg-guvi-soft">
                <i className="fa-brands fa-google text-[17px]" aria-hidden="true" />
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm font-bold text-black/55">
                {isSignup ? "Already have an account?" : "Do not have an account?"}{" "}
                <a href={isSignup ? "#login" : "#signup"} className="text-guvi-deepGreen hover:text-black">
                  {isSignup ? "Login" : "Sign up"}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ icon, label, hasReveal = false, ...inputProps }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-extrabold text-black/74">{label}</span>
      <span className="flex h-12 items-center gap-3 rounded-[8px] border border-guvi-line bg-white px-4 transition focus-within:border-guvi-green focus-within:shadow-[0_0_0_4px_rgba(25,217,80,0.14)]">
        <span className="text-black/42" aria-hidden="true">{icon}</span>
        <input
          className="min-w-0 flex-1 bg-transparent text-[15px] font-bold text-black outline-none placeholder:text-black/34"
          {...inputProps}
        />
        {hasReveal ? (
          <button type="button" className="text-black/38" aria-label="Show password">
            <Eye size={18} aria-hidden="true" />
          </button>
        ) : null}
      </span>
    </label>
  );
}

export default AuthPage;
