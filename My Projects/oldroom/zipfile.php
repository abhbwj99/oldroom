<?php
$folderPath = 'website_Refresh/Images/mockups';
$zipFilename = 'zipfile.zip';

$zip = new ZipArchive();
if ($zip->open($zipFilename, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($folderPath),
        RecursiveIteratorIterator::LEAVES_ONLY
    );

    foreach ($files as $name => $file) {
        if (!$file->isDir()) {
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($folderPath) + 1);
            $zip->addFile($filePath, $relativePath);
        }
    }

    $zip->close();

    // Set headers to force the download
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . $zipFilename . '"');
    header('Content-Length: ' . filesize($zipFilename));
    readfile($zipFilename);

    // Clean up by deleting the temporary ZIP file
    unlink($zipFilename);
} else {
    echo 'Failed to create ZIP archive.';
}
?>