

export function LandingPage() {
  return (
     <main>
        <header>
          <img src="images/5.png" alt=""></img>
          <img src="images/6.png" alt=""></img>
        </header>
        <section className="banner">
              <div className="content">
                  <h1 className="left">CSS ONLY</h1>
                  <div className="right">
                      <h2>LUNDEV</h2>
                      <p>Web Design</p>
                      <p>Don't forget to subscribe to the channel to continuously
                          <br></br>update interesting videos</p>
                  </div>
                  <div className="image">
                      <img src="images/mouth.png" alt=""></img>
                  </div>
              </div>
        </section>
        <section className="grid grid-1">
              <figure>
                  <img src="images/sich.png" alt=""></img>
              </figure>
              <figure>
                  <img src="images/3.png" alt="" className="autoRotate"></img>
              </figure>
              <h2 className="autoShow">Introduce</h2>
        </section>
        <section className="grid grid-2">
          <div className="autoShow">
                  <figure>
                      <img src="images/6.png" alt=""></img>
                  </figure>
                  <p>
                      When an unknown printer took a galley of type and scrambled it to make a type specimen b <br></br>
                      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop like.
                  </p>
          </div>
          <div className="autoShow">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen b <br></br>
                  ook. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  printer took a galley of type and scrambled it to make a type specimen b <br></br>
                  ook. It has survived not only five centuries, but also the leap into electronic typesetting, remai
          </div>

            <div className="autoShow">
                <figure>
                    <img src="images/2.png" alt=""></img>
                </figure>
                <p>
                    When an unknown printer took a galley of type and scrambled it to make a type specimen b <br></br>
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>
            <div className="autoShow">
                <figure>
                    <img src="images/candy.png" alt=""></img>
                </figure>
            </div>
        </section>
         <section className="grid grid-3">
            <div className="autoBlur">LUNDEV</div>
            <div className="autoBlur">DESIGNER</div>
            <div className="autoBlur">DEVELOPER</div>
            <div className="autoBlur">SUBCRIBE +</div>
            <div className="autoBlur">SEE MORE &#8599;</div>
        </section>
     </main>
  );
}
