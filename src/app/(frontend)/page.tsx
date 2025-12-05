import React from 'react'
import Link from 'next/link'
import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Jonty Knox',
  description:
    'Jonty Knox is an Australian software entrepreneur, engineer, designer, and Co-founder of CustomerOS.',
}

export default function Home() {
  return (
    <div className="page-wrapper">
      <header>
        <Image src="/images/jonty-knox.jpg" alt="Jonty Knox" width={60} height={60} />
        <h1>Jonty Knox</h1>
        <h2 className="subheading">Australian software entrepreneur</h2>
      </header>

      <main>
        <section>
          <ul className="list-disc pl-6">
            <li>
              Co-founder of{' '}
              <a href="https://customeros.ai" target="_blank" rel="noopener noreferrer">
                CustomerOS
              </a>
            </li>
            <li>
              Building AI sales, marketing and customer success Agents with{' '}
              <a href="https://mateocafe.com/" target="_blank" rel="noopener noreferrer">
                Matt Brown
              </a>
            </li>
            <li>
              Y Combinator graduate (
              <a
                href="https://www.ycombinator.com/companies/customeros"
                target="_blank"
                rel="noopener noreferrer"
              >
                Summer 2022
              </a>
              )
            </li>
            <li>
              Previously Head of Product at Voxbone,{' '}
              <a
                href="https://www.bandwidth.com/blog/bandwidth-to-acquire-international-communications-leader-voxbone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sold to Bandwidth for US$519M in 2020
              </a>
            </li>
            <li>
              Previously ran Product at{' '}
              <a href="https://ottofinance.io" target="_blank" rel="noopener noreferrer">
                Otto
              </a>
              , a Sequoia backed company
            </li>
            <li>Angel investor in 20+ pre-seed companies</li>
            <li>
              Based between{' '}
              <a
                href="https://maps.app.goo.gl/s9d7TS4SyS7sNhcA9"
                target="_blank"
                rel="noopener noreferrer"
              >
                London, UK
              </a>{' '}
              and <Link href="/tuscany">Tuscany, Italy</Link>
            </li>
            <li>
              <a href="mailto:jonty@customeros.ai?subject=Sliding%20into%20your%20DMs">
                jonty@customeros.ai
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Bio</h2>
          <span style={{ fontSize: '14px', opacity: 0.8, paddingBottom: 0 }}>
            For event organizers, journalists, and podcast hosts to copy-paste.
          </span>
          <blockquote cite="https://www.crunchbase.com/person/jonty-knox">
            <span style={{ display: 'block' }}>
              Jonty Knox is an Australian entrepreneur and the co-founder of CustomerOS, a Y
              Combinator-backed company building AI agents for enterprise sales and marketing teams.
              Previously, he was Head of Product at Voxbone, which was acquired by Bandwidth for
              $519M in 2020. He is passionate about using AI to transform customer interactions to
              be a pleasure every single time.
            </span>
          </blockquote>
        </section>

        <section>
          <h2>Awards</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://www.notion.vc/cloud-challengers-2023/top-100-b2b"
                target="_blank"
                rel="noopener noreferrer"
              >
                2023 Notion VC&apos;s B2B Software 100 List
              </a>
              : #1 upcoming B2B SaaS company
            </li>
            <li>
              <a
                href="https://www.uctoday.com/unified-communications/introducing-your-uc-awards-2021-winners/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2021 UC Awards
              </a>
              : Most Innovative Product
            </li>
            <li>
              <a
                href="https://www.ispreview.co.uk/index.php/2020/09/itspa-reveal-the-2020-best-uk-voip-provider-award-winners.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                2020 ITSPA Awards
              </a>
              : Best VoIP Innovation
            </li>
            <li>
              <a
                href="https://www.capacitymedia.com/article/29otbtelon5a9qh3hqfwg/news/the-winners-of-the-2019-global-carrier-awards-are-announced"
                target="_blank"
                rel="noopener noreferrer"
              >
                2019 Global Carrier Awards
              </a>
              : Best Voice Service Innovation - Mature Market
            </li>
          </ul>
        </section>

        <section>
          <h2>Talks</h2>
          <p>
            Jonty has talked at prestigious locations globally as both a Keynote Speaker and
            panelist, at events in King&apos;s College, London and with Amazon&apos;s AWS.
          </p>
        </section>

        <section>
          <h2>Interests</h2>
          <ul className="list-disc pl-6">
            <li>
              AI and machine learning, particularly in natural language processing and agent design
            </li>
            <li>Product strategy and go-to-market execution in B2B SaaS</li>
            <li>Enabling high-performance remote teams</li>
            <li>Running, weight-lifting & playing music</li>
            <li>
              Currently{' '}
              <Link href="/italy">restoring and renovating a 200+ year old farm house</Link> in
              Tuscany, Italy.
            </li>
            <li>Maintaining a few aging (modern) classic cars</li>
          </ul>
        </section>

        <section>
          <h2>Media</h2>
          <div className="grid">
            <figure>
              <a href="/images/jonty-knox-reflection.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="gridImage"
                  src="/images/jonty-knox-reflection.jpg"
                  alt="Jonty Knox headshot"
                  width={400}
                  height={200}
                  style={{ objectPosition: 'center' }}
                />
              </a>
              <figcaption>Introducing the world to CustomerOS AI Agents in 2024</figcaption>
            </figure>
            <figure>
              <a href="/images/jonty-knox-formal.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="gridImage"
                  src="/images/jonty-knox-formal.jpg"
                  alt="Jonty Knox in traditional Scottish black tie (kilt not pictured)"
                  width={400}
                  height={200}
                />
              </a>
              <figcaption>Jonty in traditional Scottish black tie (kilt not pictured)</figcaption>
            </figure>
            <figure>
              <a href="/images/jonty-knox-office.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="gridImage"
                  src="/images/jonty-knox-office.jpg"
                  alt="Jonty Knox speaking about CustomerOS's product strategy"
                  width={400}
                  height={200}
                />
              </a>
              <figcaption>Speaking about CustomerOS&apos;s product strategy</figcaption>
            </figure>
            <figure>
              <a href="/images/jonty-knox-yc-retreat.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="gridImage"
                  src="/images/jonty-knox-yc-retreat.jpg"
                  alt="Jonty Knox attending the YC S22 Batch Kickoff in Sonoma, California"
                  width={400}
                  height={200}
                />
              </a>
              <figcaption>Attending the YC S22 Batch Kickoff in Sonoma, California</figcaption>
            </figure>
            <figure>
              <a
                href="/images/jonty-knox-westminster.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="gridImage"
                  src="/images/jonty-knox-westminster.jpg"
                  alt="Jonty Knox visiting Westminster to meet with the UK's Investment Minister"
                  width={400}
                  height={200}
                />
              </a>
              <figcaption>
                Visiting Westminster to meet with the UK&apos;s Investment Minister
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2>Links</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="https://x.com/jontyknox" target="_blank" rel="noopener noreferrer">
                Twitter/X
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jontyknox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jontyk" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.crunchbase.com/person/jonty-knox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crunchbase
              </a>
            </li>
            <li>
              <a
                href="https://www.ycombinator.com/companies/customeros"
                target="_blank"
                rel="noopener noreferrer"
              >
                Y Combinator
              </a>
            </li>
            <li>
              <a
                href="https://www.producthunt.com/@jontyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ProductHunt
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
