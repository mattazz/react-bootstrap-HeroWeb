import { Container, Image, Row, Col } from "react-bootstrap"
import HeroCard from "./HeroCard"

function HeroPage() {
    return (
        <>
            <Container className="text-center banner-container">
                <div className="banner-container">
                    <Image src="https://4kwallpapers.com/images/wallpapers/spider-man-no-way-home-marvel-comics-ultrawide-5k-3840x2160-7744.jpg" className="banner-image" />
                    <div className="banner-text">
                        <h1>Meet Spiderman</h1>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="mt-4 ">
                    <Col className="hero-body-card ">
                        <HeroCard
                            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/12/spider-man-secret-comic-3.jpg"
                            cardTitle="Powers"
                            cardText="Spider-man has numerous abilities including Superhuman strength, speed and agility. He also has the ability to cling to most surfaces, he has genius level intellect, precognitive Spider-sense and also utilizes web-shooters to shoot strong spider-web strings from wrists. This mechanism ejects an advanced adhesive, releasing web-fluid in a variety of configurations, including a single rope-like strand to swing from, a net to snare or bind enemies, and a simple glob to foul machinery or blind an opponent. He can also weave the web material into simple forms like a shield, a spherical protection or hemispherical barrier, a club, or a hang-glider wing."
                        />
                    </Col>
                    <Col className="hero-body-card ">
                        <HeroCard
                            src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24713884/nVKaObLEsiPyqfmrPXW4BW1MT3n.jpeg?quality=90&strip=all&crop=7.8125,0,84.375,100"
                            cardTitle="History"
                            cardText="In 1962 after the success of Fantastic Four, Stan Lee had ideas for a new superhero which arose from the teenage demand for comic books. He wanted to create a superhero to whom teenagers could relate to. Stan Lee developed the character's background and Steve Ditko designed the costume. Spider-man debuted in Amazing Fantasy #15 and was an instant hit."
                        />
                    </Col>
                    <Col className="hero-body-card ">
                        <HeroCard
                            src="https://i.redd.it/0t3bd8ffm6ub1.jpg"
                            cardTitle="Biography"
                            cardText="Orphaned as a child when his parents Richard and Mary Parker were killed in a plane crash, Peter Parker was raised by his Aunt May and Uncle Ben. He was a very gifted child in terms of academics, but was very socially awkward and shy and was hence a victim of bullying. When he was 15, he was attending a science fair and was bit by a radioactive spider which gave him the proportional strength and agility of a spider and the ability to cling to walls. He also gained a sixth sense which he calls his spidey sense which warns of any danger."
                        />
                    </Col>
                    
                </Row>
            </Container>




        </>
    )
}

export default HeroPage