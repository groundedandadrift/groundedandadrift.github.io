<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grounded and Adrift | Perspectives on Deliberate Living</title>
    <style>
        /* --- RESET & VARIABLES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :root {
            --bg-color: #fdfcfb;
            --text-color: #2b2d2f;
            --primary-color: #2c423b; /* Muted Olive/Sage */
            --secondary-color: #5a6568; /* Slate Grey */
            --accent-color: #dfd5c6; /* Sand */
            --card-bg: #ffffff;
            --border-color: #e5e0d8;
            --font-serif: 'Georgia', serif;
            --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            font-family: var(--font-sans);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        /* --- NAVIGATION --- */
        header {
            background-color: var(--bg-color);
            border-bottom: 1px solid var(--border-color);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .nav-container {
            max-width: 1050px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
        }
        .logo {
            font-family: var(--font-serif);
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--primary-color);
            text-decoration: none;
            text-transform: uppercase;
        }
        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        nav a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s ease;
        }
        nav a:hover, nav a.active {
            color: var(--primary-color);
        }

        /* --- SPA VIEW MANAGEMENT --- */
        .page {
            display: none;
            max-width: 1050px;
            margin: 0 auto;
            padding: 3rem 2rem;
            animation: fadeIn 0.35s ease forwards;
        }
        .page.active-page {
            display: block;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- TYPOGRAPHY & BUTTONS --- */
        h1, h2, h3 {
            font-family: var(--font-serif);
            color: var(--primary-color);
            margin-bottom: 1rem;
            line-height: 1.25;
            font-weight: 600;
        }
        p {
            margin-bottom: 1.5rem;
            color: #3d4144;
            font-size: 1.05rem;
        }
        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 0.75rem 1.5rem;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 3px;
            transition: background 0.2s ease;
            border: none;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #1a2a25;
        }
        .btn-secondary {
            background-color: transparent;
            color: var(--text-color);
            border: 1px solid var(--border-color);
        }
        .btn-secondary:hover {
            background-color: #f4efebd9;
        }

        /* --- HOME PAGE --- */
        .hero {
            padding: 3rem 0 4rem 0;
            border-bottom: 1px solid var(--border-color);
            max-width: 820px;
        }
        .hero h1 { font-size: 3.2rem; margin-bottom: 1.5rem; }
        .hero p { font-size: 1.25rem; color: #4e5357; margin-bottom: 2rem; }
        
        .section-title {
            margin: 4rem 0 2rem 0;
            font-size: 1.8rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        /* --- ARTICLES / BLUEPRINTS GRID --- */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2.5rem;
        }
        .card {
            background: transparent;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1.5rem;
        }
        .card-meta {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--secondary-color);
            margin-bottom: 0.75rem;
            font-weight: 600;
        }
        .card h3 {
            font-size: 1.4rem;
            margin-bottom: 0.75rem;
        }
        .card p {
            font-size: 0.98rem;
            color: #555;
        }
        .card-link {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-block;
            margin-top: auto;
        }
        .card-link:hover {
            text-decoration: underline;
        }

        /* --- ABOUT PAGE --- */
        .about-layout {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
        }
        .profile-box {
            background-color: #f5f2ed;
            padding: 2rem;
            border-radius: 4px;
            text-align: center;
            height: fit-content;
        }

        /* --- CONTACT PAGE --- */
        .contact-layout {
            max-width: 550px;
            margin: 0 auto;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            font-size: 0.9rem;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            background-color: #fff;
            border-radius: 3px;
            font-family: var(--font-sans);
            font-size: 1rem;
        }
        .form-group input:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        /* --- FOOTER --- */
        footer {
            border-top: 1px solid var(--border-color);
            padding: 3rem 2rem;
            margin-top: 6rem;
            background-color: #fff;
        }
        .footer-container {
            max-width: 1050px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            color: var(--secondary-color);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.3rem; }
            .about-layout {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            .nav-container {
                flex-direction: column;
                gap: 1.2rem;
                padding: 1rem;
            }
            nav ul { gap: 1.2rem; }
            .footer-container {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <!-- GLOBAL HEADER -->
    <header>
        <div class="nav-container">
            <a href="#home" class="logo" onclick="navigateTo('home')">Grounded and Adrift</a>
            <nav>
                <ul>
                    <li><a href="#home" id="nav-home" class="active" onclick="navigateTo('home')">Home</a></li>
                    <li><a href="#blog" id="nav-blog" onclick="navigateTo('blog')">Articles</a></li>
                    <li><a href="#blueprints" id="nav-blueprints" onclick="navigateTo('blueprints')">Blueprints</a></li>
                    <li><a href="#about" id="nav-about" onclick="navigateTo('about')">About</a></li>
                    <li><a href="#contact" id="nav-contact" onclick="navigateTo('contact')">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- 1. HOME PAGE -->
    <main id="page-home" class="page active-page">
        <section class="hero">
            <h1>Quiet perspectives on finding focus and embracing the open route.</h1>
            <p>A down-to-earth exploration of personal development, classical philosophy, straightforward finance, and time spent in the open air. No bravado or noise—just practical insights for staying stable while navigating everyday life.</p>
            <div style="display: flex; gap: 1rem;">
                <a href="#blog" class="btn" onclick="navigateTo('blog')">Read Recent Articles</a>
                <a href="#about" class="btn btn-secondary" onclick="navigateTo('about')">The Philosophy</a>
            </div>
        </section>

        <section>
            <div class="section-title">
                <h2>Featured Entries</h2>
                <a href="#blog" class="card-link" onclick="navigateTo('blog')" style="margin: 0;">All articles →</a>
            </div>
            <div class="grid">
                <div class="card">
                    <div>
                        <div class="card-meta">Outdoors • 5 min read</div>
                        <h3>The Utility of Solitude on the Move</h3>
                        <p>Stepping away from modern static to find a bit of clarity on the water or the trail. Why a solo afternoon cruise or walk is simple mechanical maintenance for your head.</p>
                    </div>
                    <a href="#blog" class="card-link" onclick="navigateTo('blog')">Read →</a>
                </div>
                <div class="card">
                    <div>
                        <div class="card-meta">Insights • 4 min read</div>
                        <h3>Automating a Simple Financial Buffer</h3>
                        <p>Ditch the intricate tracking systems. True financial confidence comes down to structural simplicity, cutting out debt, and knowing your baseline numbers.</p>
                    </div>
                    <a href="#blog" class="card-link" onclick="navigateTo('blog')">Read →</a>
                </div>
                <div class="card">
                    <div>
                        <div class="card-meta">Philosophy • 6 min read</div>
                        <h3>Socrates on the Commute: Applying Logic to Friction</h3>
                        <p>Taking traditional framework patterns and letting them untangle contemporary, everyday annoyances before they disrupt your day.</p>
                    </div>
                    <a href="#blog" class="card-link" onclick="navigateTo('blog')">Read →</a>
                </div>
            </div>
        </section>
    </main>

    <!-- 2. ARTICLES (BLOG) PAGE -->
    <main id="page-blog" class="page">
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Articles</h1>
        <p style="margin-bottom: 3rem; color: var(--secondary-color);">Everyday thoughts, breakdowns, and field notes.</p>
        
        <div class="grid">
            <div class="card">
                <div>
                    <div class="card-meta">Outdoors</div>
                    <h3>The Utility of Solitude on the Move</h3>
                    <p>Why finding a bit of open space is basic maintenance for your mental clarity.</p>
                </div>
                <a href="#" class="card-link" onclick="alert('Demo Mode: In production this opens the full post.'); return false;">Read Article →</a>
            </div>
            <div class="card">
                <div>
                    <div class="card-meta">Insights</div>
                    <h3>Automating a Simple Financial Buffer</h3>
                    <p>True financial confidence comes down to structural simplicity and setting hard baselines.</p>
                </div>
                <a href="#" class="card-link" onclick="alert('Demo Mode.'); return false;">Read Article →</a>
            </div>
            <div class="card">
                <div>
                    <div class="card-meta">Philosophy</div>
                    <h3>Socrates on the Commute</h3>
                    <p>Applying traditional logical frameworks to handle daily friction calmly.</p>
                </div>
                <a href="#" class="card-link" onclick="alert('Demo Mode.'); return false;">Read Article →</a>
            </div>
            <div class="card">
                <div>
                    <div class="card-meta">Books</div>
                    <h3>Biographies that Skip the Mythology</h3>
                    <p>Three historical portraits that look honestly at mistakes, routine work, and resilience.</p>
                </div>
                <a href="#" class="card-link" onclick="alert('Demo Mode.'); return false;">Read Article →</a>
            </div>
            <div class="card">
                <div>
                    <div class="card-meta">Development</div>
                    <h3>The Value of Consistent, Non-Reciprocal Standards</h3>
                    <p>Why practicing steady, internal dedication to your own work beats chasing continuous validation.</p>
                </div>
                <a href="#" class="card-link" onclick="alert('Demo Mode.'); return false;">Read Article →</a>
            </div>
        </div>
    </main>

    <!-- 3. BLUEPRINTS (5TH PAGE - CORE GUIDES) -->
    <main id="page-blueprints" class="page">
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">The Blueprints</h1>
        <p style="margin-bottom: 3rem; color: var(--secondary-color);">Static, long-form master guidelines covering personal infrastructure. No trends, just reference frameworks.</p>
        
        <div style="display: grid; gap: 3rem; max-width: 800px;">
            <div style="border-left: 3px solid var(--primary-color); padding-left: 1.5rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">I. The Personal Knowledge Architecture</h3>
                <p>A complete setup guide for logging books, tracking historical notes, and preserving analytical thoughts using clean Markdown, keeping your mental desk clear of clutter.</p>
            </div>
            <div style="border-left: 3px solid var(--primary-color); padding-left: 1.5rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">II. The Direct Debt Elimination Protocol</h3>
                <p>A step-by-step mathematical routine for organizing multi-account balances, building automated safety pots, and systematically clearing liabilities without altering your basic standard of living.</p>
            </div>
            <div style="border-left: 3px solid var(--primary-color); padding-left: 1.5rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">III. The Local Route Blueprint</h3>
                <p>How to accurately chart water steps, pathways, and weekend tours within a local radius using basic analog map readings and regional geographical data.</p>
            </div>
        </div>
    </main>

    <!-- 4. ABOUT PAGE -->
    <main id="page-about" class="page">
        <div class="about-layout">
            <div class="profile-box">
                <h3 style="margin-bottom: 0.25rem;">Aiden</h3>
                <p style="font-size: 0.9rem; color: var(--secondary-color); margin-bottom: 0;">Writer & Thinker</p>
            </div>
            <div>
                <h2>The Balance Between Structure and Exploration</h2>
                <p>A lot of modern digital spaces for men feel incredibly performative. You’re either being told to optimize every single minute of your schedule to chase an aggressive caricature of achievement, or follow trends that don't match everyday practicality.</p>
                <p><strong>Grounded and Adrift</strong> is an antidote to that noise. The name represents the two spaces we constantly navigate: building a secure, disciplined foundation under your feet (<em>grounded</em>), while keeping the mind curious, unburdened, and open to the journey ahead (<em>adrift</em>).</p>
                <p>This is an independent project dedicated to keeping things normal, practical, and useful. No hyperbole, no filters—just straightforward reflections.</p>
                
                <h3 style="margin-top: 2.5rem; margin-bottom: 1rem;">Core Pillars</h3>
                <ul style="list-style: none; display: grid; gap: 0.75rem; padding-left: 0;">
                    <li>✓ <strong>Practical Philosophy:</strong> Stoicism and Socratic logic applied to real, modern contexts.</li>
                    <li>✓ <strong>Financial Grounding:</strong> Straightforward automated saving patterns and deliberate spending.</li>
                    <li>✓ <strong>Local Horizons:</strong> Navigating canals, rivers, and outdoor tracks without overly complex logistics.</li>
                    <li>✓ <strong>Unfiltered Literature:</strong> Digging into classical history, deep essays, and biographies worth your hours.</li>
                </ul>
            </div>
        </div>
    </main>

    <!-- 5. CONTACT PAGE -->
    <main id="page-contact" class="page">
        <div class="contact-layout">
            <h1 style="text-align: center; font-size: 2.2rem; margin-bottom: 0.5rem;">Connect</h1>
            <p style="text-align: center; margin-bottom: 2.5rem; color: var(--secondary-color);">Have an inquiry, an article response, or just want to get in touch? Send a message directly into the inbox.</p>
            
            <form onsubmit="alert('Message simulated as sent successfully.'); return false;">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="btn" style="width: 100%;">Submit Message</button>
            </form>
        </div>
    </main>

    <!-- GLOBAL FOOTER -->
    <footer>
        <div class="footer-container">
            <div>&copy; 2026 Grounded and Adrift. Built for deliberate living.</div>
            <div style="display: flex; gap: 1.5rem;">
                <a href="#home" onclick="navigateTo('home')" style="color: var(--secondary-color); text-decoration:none;">Home</a>
                <a href="#blog" onclick="navigateTo('blog')" style="color: var(--secondary-color); text-decoration:none;">Articles</a>
                <a href="#contact" onclick="navigateTo('contact')" style="color: var(--secondary-color); text-decoration:none;">Contact</a>
            </div>
        </div>
    </footer>

   <!-- VIEW ROUTER -->
    <script>
        function navigateTo(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active-page'));
            
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) {
                targetPage.classList.add('active-page');
            }

            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeNavLink = document.getElementById('nav-' + pageId);
            if(activeNavLink) {
                activeNavLink.classList.add('active');
            }

            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        window.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash.replace('#', '');
            if(['home', 'blog', 'blueprints', 'about', 'contact'].includes(hash)) {
                navigateTo(hash);
            }
        });
    </script>
</body>
</html>
