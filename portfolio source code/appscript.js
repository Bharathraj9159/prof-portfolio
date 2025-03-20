function doPost(e) {
    try {
      // Open the spreadsheet using its ID.
      var ss = SpreadsheetApp.openById("1F0NTQ7lUITlpx3h1pxAPSFXzLYogf01xZtBSv9k_RX8");
      // Get the specific sheet (change "Sheet1" if needed).
      var sheet = ss.getSheetByName("Sheet1");
      
      // Extract the parameters from the form submission.
      // e.parameter returns a simple object with key-value pairs.
      var fullname = e.parameter.fullname;
      var email = e.parameter.email;
      var message = e.parameter.message;
      
      // Create a new row array with a timestamp.
      var newRow = [new Date(), fullname, email, message];
      
      // Append the new row at the bottom of the sheet.
      sheet.appendRow(newRow);
      
      // Return a JSON success message.
      return ContentService.createTextOutput(
        JSON.stringify({ result: "success", data: newRow })
      ).setMimeType(ContentService.MimeType.JSON);
      
    } catch (error) {
      // Log the error and return a JSON error message.
      Logger.log("Error: " + error);
      return ContentService.createTextOutput(
        JSON.stringify({ result: "error", error: error.toString() })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  