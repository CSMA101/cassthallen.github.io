

function preload()
{
    img = loadImage('clickme.png');
    img1 = loadImage('monke.png');
}

function setup()
{
    let cnv=createCanvas(400,400);
    background(0);
    cnv.parent('sketch-holder');
}

function draw()
{
    background(0);
    fill(0);

    if (mouseIsPressed) 
    {
    image(img1, 0, 0, 400, 400);
    } 
    else 
    {
    image(img, 10, 10, 400, 400);
    }
}
