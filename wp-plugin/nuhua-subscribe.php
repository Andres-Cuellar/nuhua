<?php
/**
 * Plugin Name: Nuhua Subscribe
 * Description: Almacena suscriptores desde el formulario Coming Soon
 * Version: 1.0
 */

if (!defined('ABSPATH')) exit;

register_activation_hook(__FILE__, 'nuhua_subscribe_activate');
function nuhua_subscribe_activate() {
    register_post_type('nuhua_subscriber', [
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-email',
        'labels' => [
            'name' => 'Suscriptores',
            'singular_name' => 'Suscriptor',
            'add_new' => 'Nuevo',
            'add_new_item' => 'Nuevo Suscriptor',
            'edit_item' => 'Editar Suscriptor',
        ],
        'supports' => ['title'],
        'capability_type' => 'post',
        'capabilities' => [
            'create_posts' => 'do_not_allow',
        ],
        'map_meta_cap' => false,
    ]);
    flush_rewrite_rules();
}

add_action('init', 'nuhua_subscriber_post_type');
function nuhua_subscriber_post_type() {
    register_post_type('nuhua_subscriber', [
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-email',
        'labels' => [
            'name' => 'Suscriptores',
            'singular_name' => 'Suscriptor',
            'add_new' => 'Nuevo',
            'add_new_item' => 'Nuevo Suscriptor',
            'edit_item' => 'Editar Suscriptor',
        ],
        'supports' => ['title'],
        'capability_type' => 'post',
        'capabilities' => [
            'create_posts' => 'do_not_allow',
        ],
        'map_meta_cap' => false,
    ]);
}

add_filter('manage_nuhua_subscriber_posts_columns', 'nuhua_subscriber_columns');
function nuhua_subscriber_columns($columns) {
    return [
        'cb' => $columns['cb'],
        'title' => 'Email',
        'date' => 'Fecha',
    ];
}

add_action('rest_api_init', function () {
    register_rest_route('nuhua/v1', '/subscribe', [
        'methods' => 'POST',
        'callback' => 'nuhua_handle_subscribe',
        'permission_callback' => '__return_true',
    ]);
});

function nuhua_handle_subscribe(WP_REST_Request $request) {
    $email = sanitize_email($request->get_param('email'));

    if (!is_email($email)) {
        return new WP_Error('invalid_email', 'Email inválido', ['status' => 400]);
    }

    $existing = get_posts([
        'post_type' => 'nuhua_subscriber',
        'meta_key' => 'nuhua_email',
        'meta_value' => $email,
        'posts_per_page' => 1,
        'fields' => 'ids',
    ]);

    if (!empty($existing)) {
        return new WP_REST_Response(['message' => 'Ya estás registrado'], 200);
    }

    $id = wp_insert_post([
        'post_title' => $email,
        'post_type' => 'nuhua_subscriber',
        'post_status' => 'publish',
    ]);

    if (!$id) {
        return new WP_Error('save_failed', 'Error al guardar', ['status' => 500]);
    }

    update_post_meta($id, 'nuhua_email', $email);
    update_post_meta($id, 'nuhua_subscribed_at', current_time('mysql'));

    return new WP_REST_Response(['message' => '¡Gracias por registrarte!'], 200);
}
