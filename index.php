<?php
  get_header();
?>
<div class="page-content">
  <?php
    if (have_posts()) {
      while ( have_posts() ) : the_post();
          the_content();
      endwhile;
    }
  ?>
</div>
<?php
  get_footer();
?>
