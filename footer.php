<?php
  $footerTemplateDirectory = get_template_directory();
?>
      <div id="back-to-top" class="back-to-top-btn">
        <div class="btt-icon"></div>
      </div>
      <footer>
        <?php
          include $footerTemplateDirectory . '/includes/panels/footer/footer-8.php';
        ?>
      </footer>
		</div>
	<script type="text/javascript" src="<?php bloginfo('template_directory');?>/build/js/scripts.js"></script>
  <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/build/js/scripts.js"></script>
  <script src="http://localhost:35730/livereload.js"></script>
	<?php wp_footer(); ?>
	</body>
</html>
