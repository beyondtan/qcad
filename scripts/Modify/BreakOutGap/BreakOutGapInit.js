function init(basePath) {
    var action = new RGuiAction(qsTranslate("BreakOutGap", "&Break Out Gap"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/BreakOutGap.js");
    action.setIcon(basePath + "/BreakOutGap.svg");
    action.setDefaultShortcut(new QKeySequence("d,3"));
    action.setDefaultCommands(["BreakOutGap", "d3"]);
    action.setGroupSortOrder(13400);
    action.setSortOrder(350);
    action.setWidgetNames(["ModifyMenu", "ModifyToolBar", "ModifyToolsPanel"]);
}