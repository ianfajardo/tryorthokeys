import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Sticky from "react-stickynode";
import Link from "next/link";

import Date from "../components/date";

import { getFilteredPostsData } from "../lib/posts";

export async function getStaticProps() {
  const keycapPostData = getFilteredPostsData(0, "keycaps-guide");
  const switchPostData = getFilteredPostsData(0, "switches");
  return {
    props: {
      keycapPostData,
      switchPostData,
    },
  };
}

export default function Ultimateguide({ keycapPostData, switchPostData }) {
  return (
    <div>
      <Head>
        <title>
          Ultimate Guide to Ortholinear Keyboards | ortho keyboard, ortho
          keycaps, ortholinear keycaps
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Ultimate Guide to Ortholinear Keyboards | ortho keyboard, ortho
          keycaps, ortholinear keycaps"
        />
        <meta
          name="description"
          content="Learn about the benefits of an ortholinear keyboard, and how to make the switch with this comprehensive guide"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tryorthokeys.com/ultimate-guide-to-ortholinear-keyboards"
        />
        <meta
          property="og:title"
          content="Ultimate Guide to Ortholinear Keyboards | ortho keyboard, ortho
          keycaps, ortholinear keycaps"
        />
        <meta
          property="og:description"
          content="Learn about the benefits of an ortholinear keyboard, and how to make the switch with this comprehensive guide"
        />
        <meta
          property="og:image"
          content="https://tryorthokeys.com/creator-board/work-louder-creator-board-diy.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tryorthokeys.com/ultimate-guide-to-ortholinear-keyboards"
        />
        <meta
          property="twitter:title"
          content="Ultimate Guide to Ortholinear Keyboards | ortho keyboard, ortho
          keycaps, ortholinear keycaps"
        />
        <meta
          property="twitter:description"
          content="Learn about the benefits of an ortholinear keyboard, and how to make the switch with this comprehensive guide"
        />
        <meta
          property="twitter:image"
          content="https://tryorthokeys.com/creator-board/work-louder-creator-board-diy.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container ortho-guide">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Ultimate Guide to Ortholinear Keyboards
                </h1>
                <p className="lead" style={{ fontSize: "27px" }}>
                  Learn about the benefits of an ortholinear keyboard, and how
                  to make the switch with this comprehensive guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sticky
        enabled={true}
        top="#secondnav"
        bottomBoundary="#content"
        innerZ="5"
      >
        <div
          className="bg-primary"
          style={{ position: "relative", zIndex: "99999" }}
        >
          <div className="container-lg">
            <Nav
              id="#secondnav"
              defaultActiveKey="/home"
              as="ul"
              className="py-2"
            >
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#creator-board">
                  What is an Ortholinear Keyboard?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#creator-micro">
                  How to Choose
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#keyboards">
                  Keyboards
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#switches">
                  Switches
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#keycaps">
                  Keycaps
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#accessories">
                  Accessories
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </Sticky>

      <div className="section-container" id="creator-board">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8">
              <h2>
                What is an Ortholinear Keyboard and How Does it Differ from a
                Traditional Keyboard?
              </h2>
              <p>
                Ortholinear keyboards don’t have all the standard keys of a
                regular keyboard. The biggest difference is that traditional
                keyboards are laid out in a staggered fashion, while an
                ortholinear keyboard has all the keys in a straight row. This
                means that the user’s hands never have to leave the home row in
                order to type.
              </p>
              <p>
                These ortho keyboards are also customizable, meaning that they
                can be tailored to your needs and preferences. For this reason,
                many ortholinear keyboards are the smaller 40% keyboard size.
                They utilize a key layer system where you hold down a layer key
                to access different key strokes depending what layer you are on.
                For example, the first layer would serve as your alpha keys
                while the second layer might be custom shortcuts for Photoshop.
              </p>
              <p>
                The grid layout makes the keyboard faster to type on because you
                don't have to move your hands as much while scrolling through
                symbols. This also takes a bit of remembering the different
                shortcuts and has a higher learning curve.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="img-fluid mb-3"
                src="planck-keyrest-zealios.jpg"
                alt="Planck Ortho Keyboard"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container " id="creator-micro">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="img-fluid mb-3"
                src="preonic-1.jpg"
                alt="Preonic Ortho Keyboard"
              />
            </div>
            <div className="col-lg-8">
              <h2>How to Choose the Right Ortho Keyboard for You</h2>
              <p>
                A keyboard is the most important tool in your arsenal,
                especially when you are typing for long periods of time. So it's
                important to choose a keyboard that will not only satisfy your
                needs but also do so in a cost effective manner. Fortunately,
                ortho keyboards are relatively inexpensive as compared to many
                of the other customizable keyboards out there.
              </p>
              <p>
                Choosing the right keyboard is a personal decision. There are a
                number of considerations that factor in, such as aesthetics,
                ergonomics, and cost.
              </p>
              <p>
                If portability is a concern for you, then this is a great option
                to take back and forth between the office and home or to travel
                with on business trips. I haven't had any issues flying
                domestically in the United States with it, and I plan on
                bringing it on more trips in the future.
              </p>

              <p>
                The programmable feature of these keyboards is a great bonus and
                it's great to customize the keyboard the way you want. The
                default mappings for layers are great too and many people who
                use ortho keyboards use those perfectly fine if going in and
                changing every key isn't your style.
              </p>

              <p>
                There are a plethora of keyboards to choose from and below are
                our recommendations for getting started. It can be a fun DIY
                project to assemble your own ortho keyboard, add your own
                switches, and program your own keymappings.
              </p>
            </div>
          </div>
          <div className="row">
            <h2>The Advantags of an Ortholinear Keyboard</h2>

            <p>
              Many ortholinear keyboards are designed to be small, compact
              keyboards in the ballpark of the 40% keyboard size. A 40% keyboard
              usually has around 40-50 keys give or take. With the smaller form
              factor on ortholinear keyboards, your fingers aren't more than two
              keys away from what is considered home row on most key keyboards.
              They are a favorite for those who want to carry their keyboard on
              the go. They take up less space on your desk and are subjectively
              more aesthetically pleasing compared to big honking full-size
              keyboards.
            </p>

            <p>
              You're probably wondering, how am I supposed to type if I don't
              have all the keys that I need on the keyboard?!?! Smaller
              keyboards from 60 percent and down usually handle this either by
              using a dedicated function key. In the case of the Planck or
              Preonic keyboards, they utilize a layer system that changes the
              key mappings based on which layer you're on. If that sounds
              confusing, think of it as mapping a custom command to something
              like Ctrl+C. Ctrl-c does not type out "c" on the keyboard but
              actually executes the copy command on your computer.
            </p>

            <p>
              Most ortholinear keyboards available allow you to fully customize
              your key mappings and can even play music if your keyboard has
              speakers! Most utilize VIA and open-source QMK firmware making
              easier than ever to setup your keyboard the way you like. You can
              program your own keyboard shortcuts with these and customize them
              however you want. This can be great if you never really used all
              the different keys on a full-size keyboard. You'll be able to have
              full control over your mappings. Never used the Page Up and Page
              Down keys? Change them to macro shortcuts for a commonly used
              program like photoshop or a video editor.
            </p>

            <h3>What Are the Disadvantages of Ortholinear Keyboards?</h3>
            <p>
              These keyboards are highly customizable as compared to traditional
              ones, and it takes a lot of time for people to get used to them.
              The grid-like pattern takes some time to get used to compared to
              the traditional keyboard staggered key layout. Of course, an
              ortholinear keyboard isn’t for everyone. Customization of
              keymappings inherently will take a good amount of upfront time to
              set up to your liking. However, you can find preset mappings
              online that you can edit to save your some time. If you like to
              customize your keyboard, the time investment might be worth it for
              you.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container" id="keyboards">
        <div className="container-lg">
          <div className="row mt-3">
            <div className="col-lg-12">
              <h2>Keyboard Options</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <h3>OLKB Planck & Preonic</h3>
              <img
                className="img-fluid my-3"
                src="plank-preonic.jpg"
                alt="ortholinear keyboard planck and preonic 40 percent keyboards"
              />
              <p>
                The most popular options are the OLKB Planck and Preonic
                keyboards which use customizable hot-swappable switches. They
                are also available online. You can order them right away with
                Drop or Amazon, so you don't have to wait for them to come back
                in stock. Assembly for this product should be easy, as the
                majority of the parts come pre-assembled. All you'll need is a
                screwdriver.
              </p>
              <p>
                The Planck and Preonic offer a compact keyboard that frees up
                space on your desk, and allows you to work more efficiently when
                set up with your own macros. The grid layout and universal 1u
                size of each keycap on the Preonic and Planck keyboards allows
                you to map a key or command without worrying about hierarchy.
              </p>
              <a
                href="https://www.tryorthokeys.com/OLKB"
                className="mt-3 btn btn-primary mr-2"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-4">
              <h3>Work Louder: Creator Board</h3>
              <img
                className="img-fluid my-3"
                src="/work-louder-creator-board.jpg"
                alt="work louder creator board"
              />
              <p>
                Chances are you've seen this ortholinear keyboard from Work
                Louder all over Instagram and TikTok. The Creator Board is an
                innovative modular design keyboard that can be configured to
                suit individual preferences. This is a customizable keyboard
                (customizable in terms of keys, orientation, modules, and size),
                which means you can create a personally tailored setup to fit
                your needs. Additional modules can be added with more
                customizable knobs and keys. There are currently only two
                modules, the Loop Pad and the Nano Pad, but additional modules
                are planned for the future.
              </p>
              <p>
                Features:
                <br />
              </p>

              <ul>
                <li>Cusomizable removable modules</li>
                <li>Up to 6 rotary knobs</li>
                <li>236 programmable keys across 4 key layers</li>
                <li>
                  VIA and QMK configurarable to customize all keys 60% layout
                </li>
              </ul>
              <a
                href="https://www.tryorthokeys.com/keyboards"
                className="mt-3 btn btn-primary mr-2"
              >
                See More Keyboards
              </a>
            </div>
            <div className="col-lg-4">
              <h3>Other Keyboards</h3>
              <img
                className="img-fluid my-3"
                src="/montsinger2.webp"
                alt="Montsinger Split Keyboard"
              />
              <p>
                There are plenty of different ortholinear keyboards that offer
                different benefits and options. Some of different versions of
                the same 48-key layout as the Planck. Others offer better
                ergonomics in the form of a split keyboard which seperates the
                keyboard in half for better hand placement.
              </p>
              <ul>
                <li>
                  <a href="/split">Split Keyboards</a>: Ergonomic
                </li>
                <li>
                  <a href="/id75">ID75 Keyboard</a>: A larger 75-key ortholinear
                </li>
                <li>
                  <a href="/koolertron">Koolertron:</a> Ortholinear Macro
                </li>
              </ul>
              <a
                href="https://www.tryorthokeys.com/keyboards"
                className="mt-3 btn btn-primary mr-2"
              >
                See More Keyboards
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="keycaps">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Keycaps</h2>
              <p>
                Out of the ways to customize your keyboard, changing out your
                keycaps is probably the best way to show your personality. When
                I first brought my keyboard to the office, I had a lot of looks
                and questions on the blank DSA keycaps I put on my first Planck
                keyboard. I have since updated my keycaps a couple times and
                honestly it's pretty fun to change up the look every so often.
              </p>

              <p>
                There are plethora of different types of keycaps with different
                typing profiles, legends and sizes. Luckily, for ortholinear
                keycaps - it's mostly pretty simple. There are many that offer
                kits specifically for ortho keyboards and below our some of our
                recommendations for all types of budgets.
              </p>
            </div>
          </div>
          <div className="row">
            {keycapPostData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg" key={slug}>
                <div className="mb-5">
                  <div className="card">
                    <div className="card-img-top">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a>
                          <img
                            className="img-fluid mb-3"
                            src={image}
                            alt={title}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container" id="switches">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Switches</h2>
              <p>
                Keyboard switches are what make your keyboard a keyboard.
                Arguably the most important pick in your keyboard setup, there
                are a plethora of different choices. However, the best pick are
                mechanical switches: linear, tactile, and clicky.
              </p>

              <p>
                A tactile switch is one that uses a "tactile" bump feel to
                indicate when the key has been pressed. The bump also tells you
                that the key has been pressed and released, as opposed to a
                clicky switch which will only have an audible sound. The other
                type of switch is a linear switch, which has no bump and has a
                smooth keystroke throughout the press.{" "}
              </p>

              <p>
                Luckily, you can purchase a switch tester to try out a set of
                different switches if you're agonizing over your decison.
                KBDFans offers{" "}
                <a href="https://kbdfans.com/r?id=tr12mu">tactile</a>,{" "}
                <a href="https://kbdfans.com/r?id=o5143q">clicky</a>, and{" "}
                <a href="https://kbdfans.com/r?id=dgt4qi">linear</a> testers to
                choose from and many more.
              </p>
            </div>
          </div>
          <div className="row">
            {switchPostData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-3" key={slug}>
                <div className="mb-5">
                  <div className="card">
                    <div className="card-img-top">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a>
                          <img
                            className="img-fluid mb-3"
                            src={image}
                            alt={title}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Conclusion</h2>
              <p>
                Ortholinear keyboards are often overlooked because they don't
                fit the standard layout of most keyboards. But what makes them
                so great is that they can be customized to fit your needs and be
                as compact as possible with no wasted space. This also means
                ortholinear keyboards are lightweight and easy to transport,
                making them the ideal solution for anyone who spends a lot of
                time traveling.
              </p>
              <p>
                The ortholinear keyboard is a great option for people who want a
                more efficient way to type or who are looking for a portable
                keyboard that they can customize.
              </p>

              <h3>40% Keyboards are Small but Powerful</h3>
              <p>
                A majority of the ortholinear keyboards options are around the
                40% size and for good reason. 40% keyboards are small and
                powerful little keyboards that are portable and minimal. As
                opposed to "100%" keyboards with a full layout and number pad,
                40% keyboards usually only have the set of alphas and a handful
                of modifier keys around them. Because of this, 40 percent
                keyboards heavily rely on programmability and shortcuts. Very
                few people use all the functionality of a full 100% keyboard,
                let alone have a need for the built-in functions there.
              </p>

              <h3>Are they "Ergonomic"?</h3>

              <p>
                A small ortholinear keyboard layout in combination with the
                layer system greatly reduces the need for stretching your
                fingers more than a single row away from homerow. The reduced
                finger travel might be something that you're interested in but
                it doesn't necessarily mean it is ergonomic or will relieve any
                pain you experience typing. In that case, you may need to look
                into <a href="/split">split keyboards options</a> which
                literally split the keyboard in half to help you adjust the
                keyboard to better adjust wrist angle for comfort.
              </p>
              <p>
                Ortholinear keyboards weren't meant to be designed to fix ulnar
                deviation or wrist problems. If typing on an ortholinear
                keyboard (or any keyboard) is causing you pain, stop using it!
                Consult your doctor if you are experiencing pain when typing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="videos">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/GH8f0UpX8CE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container bg-dark text-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Blog</h2>
              <p className="lead">
                Catch up on our blog for the latest guides & news for all your
                ortholinear keyboard needs!
              </p>
              <a href="/posts" className="btn btn-primary my-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
