let width, height, symmetry, xOffset;
function setup() {
    width = 500;
    height = 500;
    symmetry = 6;
    xOffset = 0;
    createCanvas(width, height);
    background(0);
    clearButton = createButton('Clear');
    clearButton.position(width + 20, 50);
    clearButton.style("font-size", "2vw");
    clearButton.mousePressed(clearCanvas);

    saveButton = createButton('Save');
    saveButton.position(width + 20, 150);
    saveButton.style("font-size", "2vw");
    saveButton.mousePressed(saveSnowflake);

    para = createP('Save and send your snowflake to my instagram to get featured! (Username: spidey_codes)')
    para.style("font-size", "2vw");
    angleMode(DEGREES);

}

function clearCanvas() {
    background(0);
}

function saveSnowflake() {
    save('snowflake.png');
}

function draw() {
    translate(width / 2, height / 2);
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;

        if (mouseIsPressed) {
            let hueAmount = map(sin(xOffset), -1, 1, 200, 255);
            xOffset++;
            stroke(hueAmount, 100);
            let angle = 360 / symmetry;
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                strokeWeight(6);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }


}