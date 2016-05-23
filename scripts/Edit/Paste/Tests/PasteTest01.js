// Auto generated by Testing Dashboard
// File        : scripts/Edit/Paste/Tests/PasteTest01.js
// Timestamp   : 2015-04-23 15:32:45
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function PasteTest01() {
    TdbTest.call(this, 'scripts/Edit/Paste/Tests/PasteTest01.js');
}

PasteTest01.prototype = new TdbTest();

PasteTest01.prototype.test00 = function() {
    qDebug('running PasteTest01.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::LineToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::LineToolsPanel::Line2PButton');
    this.setZoom(37.75609756097561, new RVector(-27.9415, -9.21286, 0, true));
    var p = new RVector(30.033915, 19.860142);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(37.75609756097561, new RVector(-27.9415, -9.21286, 0, true));
    var p = new RVector(40.098514, 19.966085);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(37.238049, 16.178618);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(36.549419, 16.443475);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.selectAll();
    this.triggerCommand('copy');
    this.triggerCommand('paste');
    this.setToolOption('Paste/Rotation', '0');
    this.setToolOption('Paste/Scale', '1');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setZoom(37.75609756097561, new RVector(-27.9415, -9.21286, 0, true));
    var p = new RVector(35.013243, 17.979651);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setZoom(37.75609756097561, new RVector(-27.9415, -9.21286, 0, true));
    var p = new RVector(34.986757, 13.106266);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKey('MainWindow::FileToolBar::ToolButtonPrintPreviewPro', 0x1000015, 5.36871e+08);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKey('MainWindow::FileToolBar::ToolButtonPrintPreviewPro', 0x1000015, 5.36871e+08);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKey('MainWindow::FileToolBar::ToolButtonPrintPreviewPro', 0x1000015, 5.36871e+08);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKey('MainWindow::FileToolBar::ToolButtonPrintPreviewPro', 0x1000015, 5.36871e+08);
    // key: '[non-alphabetic]'
    this.pressAndReleaseKey('MainWindow::FileToolBar::ToolButtonPrintPreviewPro', 0x1000013, 5.36871e+08);
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1/2');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1/2');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setZoom(37.75609756097561, new RVector(-27.9415, -9.21286, 0, true));
    var p = new RVector(33.927326, 14.960271);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1/2');
    this.setToolOption('Paste/FlipHorizontal', 'true');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    this.setToolOption('Paste/Rotation', '30');
    this.setToolOption('Paste/Scale', '1/2');
    this.setToolOption('Paste/FlipHorizontal', 'false');
    this.setToolOption('Paste/FlipVertical', 'false');
    this.setToolOption('Paste/ToCurrentLayer', 'false');
    this.setToolOption('Paste/OverwriteLayers', 'false');
    this.setToolOption('Paste/OverwriteBlocks', 'false');
    this.updateToolOptions();
    var p = new RVector(32.603036, 16.046189);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(32.57655, 15.966731);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(32.550065, 15.887274);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('PasteTest01_000.dxf');
    this.tearDown();
    qDebug('finished PasteTest01.test00()');
};
