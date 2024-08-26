$content = $_POST["content"];
$file_handle = fopen("text.txt", 'a'); 
fwrite($file_handle, $content);
fclose($file_handle);
