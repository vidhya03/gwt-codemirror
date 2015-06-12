# Installation #

1. Download the last version of codemirror-vx.x.jar (if you are using GWT 1.6, download the codemirror\_V-0.4-gwt16.jar)

2. Include the jar in WEB-INF/lib directory of your project

3. Inherit the following in your <b>project-name.gwt.xml</b>

```
<inherits name="com.weborient.codemirror.CodemirrorGwt"/>
```


# How To Use? #




```
public class CodemirrorGwt implements EntryPoint {


	public void onModuleLoad() {
		
             // use the configuration class in order 
             // to override the default widget configuraions

             CodeMirrorConfiguration configuration = new CodeMirrorConfiguration();
	     configuration.setTagSelectorLabel("Temlates: ");
             configuration.setListBoxPreSets("<html></html>", "<div></div>");
        
             // pass the configuration object to the widget

             CodeMirrorEditorWidget widget = new CodeMirrorEditorWidget(configuration);



             RootPanel.get().add(widget);

             // these two methods should be called after the widget has been added
             // other wise you'll get an error

             widget.setText("some text");

             String text = widget.getText();

	}
 }
```