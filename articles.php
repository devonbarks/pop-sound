<?php
    require 'includes/database.php';
    $conn = getDB();

    $sql = "SELECT *
        FROM article
        ORDER BY published_at DESC;";

    // $sqlDelete = "DELETE FROM article WHERE id = '21';"; //deletes article

    // $sql = "DELETE FROM article;"; //deletes entire article table

    // $sql = "ALTER TABLE article ADD playlist varchar(500);"; //adds a column

    $results = mysqli_query($conn, $sql);

    // mysqli_query($conn, $sqlDelete);

    if ($results === false) {
        echo mysqli_error($conn);
    } else {
        $articles = mysqli_fetch_all($results, MYSQLI_ASSOC);
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="includes/style.css">
        <title>Articles</title>
        <form>
            <input id="back" type="button" value="back" onclick="history.go(-1)">
        </form>
    </head>
    <body>
        <h1 class="title">Articles</h1>
        <br><br>
        <div class="article-container">
            <a href="article.php?id=<?= $articles[0]['id']; ?>">
                <div class="main-article">
                    <div class="main-image">
                        <img src="<?= $articles[0]['image_link'] ?>" height="250px" width="420px">
                    </div>
                    <div class="main-info">
                        <p>newest post:</p>
                        <p><?= $articles[0]['title'] ?></p>
                        <p><?= substr(($articles[0]['content']), 0, 500) . "... keep reading! -->"; ?></p>
                    </div>
                </div>
            </a>
        </div>
        <br><br><br><br><br><br>
        <div class="articles">
            <?php if (empty($articles)): ?>
                    <p>No articles found.</p>
            <?php else: ?>
                    <?php foreach ($articles as $article): ?>
                        <div class="article">
                            <a href="article.php?id=<?= $article['id']; ?>">
                            <img src="<?= $article['image_link'] ?>" height=150px width=150px>
                            <h2><?= htmlspecialchars($article['title']); ?></h2>
                            <p><?= substr(($article['content']), 0, 100) . "..."; ?></p>
                            </a>
                        </div>
                    <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </body>
</html>