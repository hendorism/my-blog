//Start drawing music.

function aSillySong(x,y){
    ctx.font = "16px monospace";
    ctx.fillText("Bb clarinet",0,80);
    drawStaves(6,80,100);
    drawTrebleCleff(10,130);
    drawTimeSignature(20,120,4,4);
    drawKeySignature(30,120,-4);
    ctx.font = "16px monospace";
    ctx.fillStyle = "#ff6699";
    ctx.fillText("A Silly Song",130,55);
    ctx.fillStyle = "#000000";
    drawNoteHead(70,110);
    drawLine(74,110,74,85);
    drawNoteHead(80,115);
    drawLine(84,115,84,85);
    drawNoteHead(90,125);
    drawLine(94,125,94,85);
    drawNoteHead(100,140);
    drawLine(104,140,104,85);
    drawThickLine(74,85,104,85);
    drawThickLine(74,89,104,89);
    drawNoteHead(110,140-35);
    drawLine(113,140-35,113,83);
    drawNoteNatural(130,140-30);
    drawLine(133,140-30,133,87);
    drawNoteHead(140,120);
    drawLine(143,120,143,89);
    drawNoteHead(150,130);
    drawLine(153,130,153,91);
    drawThickLine(113,83,153,91);
    drawThickLine(113,87,153,95);
    drawNoteHead(160,140);
    drawLine (163,140,163,95);
    drawNoteHead(170,125);
    drawLine (173,125,173,93);
    drawNoteFlat(190,115);
    drawLine (193,115,193,89);
    drawNoteHead(200,105);
    drawLine (203,105,203,85);
    drawThickLine (163,95,203,85);
    drawThickLine (163,99,203,89);
    drawNoteHead(210,120);
    drawLine(207,120,207,150);
    drawNoteHead(220,115);
    drawLine(217,115,217,148);
    drawNoteFlat(240,100);
    drawLine(237,100,237,144);
    drawNoteSharp(260,110);
    drawLine(257,110,257,140);
    drawNoteNatural(280,105);
    drawLine(277,105,277,136);
    drawThickLine(207,150,277,136);
    drawThickLine(207,146,217,144);
    drawThickLine(237,140,277,132);
    drawLine(240,90,240,79);
    drawLine(240,79,250,81);
    drawLine(270,85,280,87);
    drawLine(280,87,280,95);
    ctx.font = "18px monospace";
    ctx.fillText("3",255,87);
    drawLine(390,140,390,100);
    //Start line two.
    drawTrebleCleff(10,130+80);
    drawKeySignature(20,120+80,-4);
    drawNoteHead(45,180);
    drawNoteHead(55,185);
    drawNoteHead(65,195);
    drawNoteHead(75,205);
    drawLine(42,180,45,215);
    drawLine(52,185,55,217);
    drawLine(62,195,65,219);
    drawLine(72,205,75,221);
    drawThickLine(45,215,75,221);
    drawThickLine(44,211,74,217);
    drawNoteHead(85,210);
    drawNoteHead(95,200);
    drawNoteHead(105,190);
    drawNoteHead(115,180);
    drawLine(82,210,82,225);
    drawLine(92,200,92,221);
    drawLine(102,190,102,217);
    drawLine(112,180,112,213);
    drawThickLine(82,225,112,213);
    drawThickLine(82,221,112,209);
    drawNoteHead(125,215);
    drawNoteHead(135,205);
    drawNoteHead(145,180);
    drawLine(128,215,128,178);
    drawLine(138,205,138,188);
    drawLine(148,180,148,198);
    drawThickLine(128,178,148,198);
    drawThickLine(128,185,138,195);
    drawNoteHead (165,220);
    drawNoteHead (185,180);
    drawLine (168,220,168,203);
    drawLine (188,180,188,198);
    drawThickLine (168,203,188,198);
    drawLine (198,220,198,180);
    //Db4 Ab4 F5 G5 Ab5 A5 Bb5 Db5
    drawNoteHead (205,225);
    drawNoteHead (214,205);
    drawNoteHead (223,180);
    drawNoteHead (232,175);
    drawNoteHead (241,170);
    drawLine(241-8,170,241+46,170);
    drawNoteNatural (260,170);
    drawNoteHead (269,165);
    drawNoteHead (278,155);
    drawLine (278-9,160,278+9,160);
    drawLine(207,225,207,240);
    drawLine (216,205,216,230);
    drawLine (225,180,225,220);
    drawLine (234,175,234,210);
    drawThickLine (207,240,234,210);
    drawThickLine (207,235,234,200);
    drawLine (244,170,244,210);
    drawLine (264,170,264,200);
    drawLine (273,165,273,195);
    drawLine (281,155,281,190);
    drawThickLine (244,210,281,190);
    drawThickLine (244,203,281,183);
    
    
    drawLine (390,220,390,180);
}
//aSillySong();