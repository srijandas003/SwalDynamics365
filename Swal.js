function AlertName(executionContext) {
    var formContext = executionContext.getFormContext();
    
    let wrControl = formContext.getControl("WebResource_new_1");
    if (wrControl) {
        wrControl.getContentWindow().then(
            function (contentWindow) {
                contentWindow.setClientApiContext(Xrm, formContext);
            }
        )
        }
}
