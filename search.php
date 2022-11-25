<?php
get_header();
global $wp_query;
?>
<div class="container">
  <div class="row">
    <div class="col-12 search-results">
      <h1 class="search-title"> <?php echo $wp_query->found_posts; ?>
        <?php _e( 'Results Found For', 'locale' ); ?>: "<?php the_search_query(); ?>" </h1>
        <?php if ( have_posts() ) { ?>
          <ul>
            <?php while ( have_posts() ) { the_post(); ?>
            <li>
              <div class="image">
                <a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail('medium') ?></a>
              </div>
              <div class="title">
                <h3><a href="<?php echo get_permalink(); ?>"><?php the_title();  ?></a></h3>
              </div>
              <div class="button-holder">
                 <a href="<?php the_permalink(); ?>" class="btn-primary">View Product</a>
              </div>
            </li>
            <?php } ?>
          </ul>
        <?php echo paginate_links(); ?>
        <?php } ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>
