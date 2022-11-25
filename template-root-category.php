<?php
  /* Template Name: Root Category */
  $categoryTopImage = get_field('background-image');
  $attachedCategories = get_field('visible_categories');
?>
<?php
  get_header();
?>
<section class="category-top-section">
  <div class="category-top-image" style="background-image:url(<?php echo $categoryTopImage; ?>);"></div>
</section>
<?php
  if (have_posts()) {
    while ( have_posts() ) : the_post();
      the_content();
    endwhile;
  }
?>
<?php
  get_footer();
?>
